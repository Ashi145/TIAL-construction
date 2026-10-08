import type { Project, ResponsiveImage, TeamMember } from "../data/types";

/**
 * Demo-mode persistence for the admin page.
 *
 * WARNING: This is intentionally NOT secure. See the notice shown on the
 * admin page. Data lives in the browser's localStorage only — it is visible
 * only on the device/browser where it was created and can be read by anyone
 * who inspects the page. A real backend is required for multi-user publishing
 * and genuine session-cookie authentication.
 */

const TEAM_KEY = "tial_admin_team_v1";
const PROJECTS_KEY = "tial_admin_projects_v1";
const SESSION_KEY = "tial_admin_session_v1";
const LOGIN_KEY = "tial_admin_login_state_v1";

// Demos defaults. Change these before relying on them for anything real.
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD_HASH = "6bc3492894777efac905ebb82918d295a7b399e994d5ad047da6fb1facb3f225"; // sha256("admin:Tial2019")

const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 5 * 60 * 1000;

function readList<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const value = JSON.parse(raw) as T[];
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeList<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

export function getStoredTeam(): TeamMember[] {
  return readList<TeamMember>(TEAM_KEY);
}

export function saveTeam(members: TeamMember[]): void {
  writeList(TEAM_KEY, members);
}

export function getStoredProjects(): Project[] {
  return readList<Project>(PROJECTS_KEY);
}

export function saveProjects(projects: Project[]): void {
  writeList(PROJECTS_KEY, projects);
}

export function clearDemoData(): void {
  localStorage.removeItem(TEAM_KEY);
  localStorage.removeItem(PROJECTS_KEY);
}

type Session = { token: string; username: string; exp: number };
type LoginState = { failures: number; lockedUntil: number };

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function isAuthenticated(): boolean {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw) as Session;
    return Boolean(session?.token && session.exp && session.exp > Date.now());
  } catch {
    return false;
  }
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(LOGIN_KEY);
}

export function getSessionUsername(): string {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return "";
    return (JSON.parse(raw) as Session).username ?? "";
  } catch {
    return "";
  }
}

async function readLoginState(): Promise<LoginState> {
  try {
    const raw = sessionStorage.getItem(LOGIN_KEY);
    if (!raw) return { failures: 0, lockedUntil: 0 };
    const state = JSON.parse(raw) as LoginState;
    return {
      failures: Number(state.failures) || 0,
      lockedUntil: Number(state.lockedUntil) || 0,
    };
  } catch {
    return { failures: 0, lockedUntil: 0 };
  }
}

export async function submitLogin(
  username: string,
  password: string
): Promise<{ ok: boolean; reason: string }> {
  const state = await readLoginState();
  if (state.lockedUntil > Date.now()) {
    return { ok: false, reason: "Too many failed attempts. Please try again in a few minutes." };
  }

  const digest = await sha256(`${username.trim()}:${password}`);
  const valid = username.trim().toLowerCase() === ADMIN_USERNAME && digest === ADMIN_PASSWORD_HASH;

  if (valid) {
    const session: Session = {
      token: crypto.randomUUID(),
      username: username.trim(),
      exp: Date.now() + SESSION_DURATION_MS,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    sessionStorage.removeItem(LOGIN_KEY);
    return { ok: true, reason: "" };
  }

  const failures = state.failures + 1;
  const lockedUntil = failures >= MAX_ATTEMPTS ? Date.now() + LOCKOUT_MS : 0;
  sessionStorage.setItem(LOGIN_KEY, JSON.stringify({ failures, lockedUntil }));
  return {
    ok: false,
    reason: lockedUntil ? "Too many failed attempts. Please try again in a few minutes." : "Invalid username or password.",
  };
}

/**
 * Reads an uploaded image file and compresses it into a ResponsiveImage
 * (data URL) so it can be stored without a server.
 */
export function fileToResponsiveImage(file: File, maxWidth = 1200): Promise<ResponsiveImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.onload = () => {
      const url = reader.result as string;
      const img = new Image();
      img.onerror = () => reject(new Error("Uploaded file is not a valid image"));
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.naturalWidth);
        const width = Math.max(1, Math.round(img.naturalWidth * scale));
        const height = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas is not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const webp = canvas.toDataURL("image/webp", 0.82);
        const dataUrl = webp.startsWith("data:image/webp") ? webp : canvas.toDataURL("image/jpeg", 0.85);
        resolve({ src: dataUrl, srcSet: dataUrl, width, height });
      };
      img.src = url;
    };
    reader.readAsDataURL(file);
  });
}