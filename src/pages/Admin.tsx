import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Lock,
  LogOut,
  UserPlus,
  FolderPlus,
  Trash2,
  ShieldAlert,
  ImagePlus,
  CheckCircle2,
  RotateCcw,
  Info,
} from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus, ResponsiveImage, TeamMember } from "../data/types";
import { listProjects, listTeamMembers } from "../services/content";
import {
  clearDemoData,
  fileToResponsiveImage,
  getSessionUsername,
  getStoredProjects,
  getStoredTeam,
  isAuthenticated,
  logout,
  saveProjects,
  saveTeam,
  submitLogin,
} from "../services/storage";

const CATEGORIES: ProjectCategory[] = ["Residential", "Commercial", "Civil", "Renovation", "Roads", "Infrastructure"];
const STATUSES: ProjectStatus[] = ["Completed", "Ongoing"];

const uid = () => (crypto.randomUUID?.() ?? `admin-${Date.now()}`).slice(0, 12);
const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") || "project";

export default function Admin() {
  const [authed, setAuthed] = useState<boolean>(() => isAuthenticated());

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }
  return <Dashboard onLogout={() => setAuthed(false)} />;
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const result = await submitLogin(username, password);
    setBusy(false);
    if (result.ok) {
      onLogin();
    } else {
      setError(result.reason);
    }
  }

  return (
    <div className="relative flex min-h-[86vh] items-center justify-center overflow-hidden bg-brand-950 px-6 py-16">
      <div className="bg-diagonal-pattern absolute inset-0" />
      <div className="relative w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
            <Lock className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-extrabold text-charcoal-900">Admin Access</h1>
          <p className="mt-2 text-center text-sm text-charcoal-500">
            Restricted area. This page is not linked anywhere on the site.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Username</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                autoComplete="username"
                className="form-input"
                placeholder="admin"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Password</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                autoComplete="current-password"
                className="form-input"
                placeholder="••••••••"
              />
            </label>

            {error && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-700 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-800 disabled:opacity-60"
            >
              <Lock className="h-4 w-4" /> {busy ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <div className="mt-5 rounded-xl border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-charcoal-600">
          <p className="flex items-center gap-2 font-bold text-charcoal-800">
            <Info className="h-4 w-4 text-gold-600" /> Demo login
          </p>
          <p className="mt-1">
            Username: <code className="font-bold">admin</code> · Password: <code className="font-bold">Tial2019</code>
          </p>
          <p className="mt-2">
            Demo mode. This is not real authentication — credentials are embedded in the site code and can be
            bypassed. Use a backend for a genuinely protected admin area.
          </p>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<"team" | "projects">("team");
  const [team, setTeam] = useState<TeamMember[]>(() => getStoredTeam());
  const [projects, setProjects] = useState<Project[]>(() => getStoredProjects());

  const username = getSessionUsername();
  const storedIds = new Set(team.map((member) => member.id));
  const storedSlugs = new Set(projects.map((project) => project.slug));

  function refresh() {
    setTeam(getStoredTeam());
    setProjects(getStoredProjects());
  }

  return (
    <div className="min-h-screen bg-charcoal-50">
      <header className="sticky top-0 z-50 border-b border-charcoal-100 bg-charcoal-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="font-display text-lg font-extrabold uppercase tracking-wide">Tial Admin</h1>
            <p className="text-xs text-charcoal-400">Signed in as {username || "admin"}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm("Remove all demo-added team members and projects from this browser?")) {
                  clearDemoData();
                  refresh();
                }
              }}
              className="flex items-center gap-1.5 rounded-md border border-charcoal-700 px-3 py-2 text-xs font-bold uppercase tracking-wide text-charcoal-300 transition hover:border-red-400 hover:text-red-300"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
            <button
              onClick={() => {
                logout();
                onLogout();
              }}
              className="flex items-center gap-1.5 rounded-md bg-gold-400 px-3 py-2 text-xs font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-xl border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-charcoal-700">
          <p className="flex items-center gap-2 font-bold text-charcoal-900">
            <ShieldAlert className="h-4 w-4 text-gold-600" /> Demo mode — changes appear only in this browser
          </p>
          <p className="mt-1">
            Added team members and projects are stored in this browser and shown to you on the public pages
            (Team, Projects, Home). They are <strong>not</strong> visible to other visitors and are lost if you
            clear the browser's site data. Setting up a real backend is required to publish to everyone.
          </p>
        </div>

        <div className="mt-8 flex gap-2">
          <TabButton active={tab === "team"} onClick={() => setTab("team")}>
            <UserPlus className="h-4 w-4" /> Team Members
          </TabButton>
          <TabButton active={tab === "projects"} onClick={() => setTab("projects")}>
            <FolderPlus className="h-4 w-4" /> Projects
          </TabButton>
        </div>

        <div className="mt-6">{tab === "team" ? <TeamPanel team={team} setTeam={setTeam} /> : <ProjectsPanel projects={projects} setProjects={setProjects} />}</div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-extrabold text-charcoal-900">
            {tab === "team" ? "All Team Members (site + browser)" : "All Projects (site + browser)"}
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-sm">
            {(tab === "team" ? listTeamMembers() : listProjects()).map((item) => {
              const isStored = tab === "team" ? storedIds.has((item as TeamMember).id) : storedSlugs.has((item as Project).slug);
              const label = tab === "team" ? (item as TeamMember).name : (item as Project).title;
              const sublabel = tab === "team" ? (item as TeamMember).title : `${(item as Project).category} · ${(item as Project).status}`;
              return (
                <div
                  key={tab === "team" ? (item as TeamMember).id : (item as Project).slug}
                  className="flex items-center justify-between gap-4 border-b border-charcoal-100 px-5 py-3 last:border-b-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-charcoal-900">{label}</p>
                    <p className="truncate text-xs text-charcoal-500">{sublabel}</p>
                  </div>
                  {isStored ? (
                    <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                      Added via admin
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-charcoal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal-500">
                      Built into site
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-t-lg px-4 py-3 text-sm font-bold uppercase tracking-wide ${
        active ? "bg-white text-brand-700 shadow-sm" : "bg-charcoal-100 text-charcoal-500 hover:bg-charcoal-200"
      }`}
    >
      {children}
    </button>
  );
}

function TeamPanel({ team, setTeam }: { team: TeamMember[]; setTeam: (members: TeamMember[]) => void }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState<ResponsiveImage | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setError("");
      const responsive = await fileToResponsiveImage(file);
      setImage(responsive);
      setPreview(responsive.src);
    } catch {
      setError("Could not read that image file. Please choose a JPG, PNG or WebP photo.");
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!image) {
      setError("Please choose a photo.");
      return;
    }
    const member: TeamMember = {
      id: uid(),
      name: name.trim(),
      title: title.trim(),
      bio: bio.trim() || "Bio to be added.",
      photo: image,
      qualifications: [],
    };
    saveTeam([...team, member]);
    setTeam(getStoredTeam());
    setName("");
    setTitle("");
    setBio("");
    setImage(null);
    setPreview("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleDelete(id: string) {
    saveTeam(team.filter((member) => member.id !== id));
    setTeam(getStoredTeam());
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
        <h2 className="font-display text-lg font-extrabold text-charcoal-900">Add Team Member</h2>
        <p className="mt-1 text-sm text-charcoal-500">Name, position and photo — press Add & Publish when done.</p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Full Name *</span>
            <input value={name} onChange={(e) => setName(e.target.value)} required className="form-input" placeholder="e.g. Emmanuel Odea" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Position / Title *</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required className="form-input" placeholder="e.g. Civil Engineer" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Short Bio (optional)</span>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="form-input" placeholder="Their role on the team" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Photo *</span>
            <input onChange={handleImage} type="file" accept="image/*" className="form-input file:mr-3 file:rounded file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700" />
          </label>
        </div>

        {preview && (
          <div className="mt-4 overflow-hidden rounded-xl border border-charcoal-100">
            <img src={preview} alt="Team member preview" className="h-40 w-full object-cover" />
            <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-charcoal-500">Photo preview</p>
          </div>
        )}

        {error && <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
        {saved && (
          <p className="mt-4 flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            <CheckCircle2 className="h-5 w-5" /> Published in this browser.
          </p>
        )}

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
        >
          <UserPlus className="h-4 w-4" /> Add & Publish
        </button>
      </form>

      <div className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
        <h2 className="font-display text-lg font-extrabold text-charcoal-900">Added by You ({team.length})</h2>
        {team.length === 0 ? (
          <p className="mt-4 text-sm text-charcoal-500">Nothing added yet. Use the form to add your first team member.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {team.map((member) => (
              <li key={member.id} className="flex items-center gap-4 rounded-xl border border-charcoal-100 p-3">
                {member.photo.src.startsWith("data:") ? (
                  <img src={member.photo.src} alt={member.name} className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                ) : (
                  <ImagePlus className="h-14 w-14 shrink-0 rounded-lg bg-charcoal-100 p-3 text-charcoal-400" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-charcoal-900">{member.name}</p>
                  <p className="truncate text-xs text-charcoal-500">{member.title}</p>
                </div>
                <button
                  onClick={() => handleDelete(member.id)}
                  aria-label={`Delete ${member.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-charcoal-400 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProjectsPanel({ projects, setProjects }: { projects: Project[]; setProjects: (projects: Project[]) => void }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ProjectCategory>("Residential");
  const [status, setStatus] = useState<ProjectStatus>("Completed");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(true);
  const [image, setImage] = useState<ResponsiveImage | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setError("");
      const responsive = await fileToResponsiveImage(file);
      setImage(responsive);
      setPreview(responsive.src);
    } catch {
      setError("Could not read that image file. Please choose a JPG, PNG or WebP photo.");
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!image) {
      setError("Please choose a photo.");
      return;
    }
    const id = uid();
    const project: Project = {
      slug: `${slugify(title)}-${id}`,
      title: title.trim(),
      category,
      status,
      location: location.trim() || "Kampala, Uganda",
      client: "—",
      year: new Date().getFullYear().toString(),
      description: description.trim() || "Project added via the admin demo.",
      scope: [],
      image,
      gallery: [image],
      featured,
    };
    saveProjects([...projects, project]);
    setProjects(getStoredProjects());
    setTitle("");
    setLocation("");
    setDescription("");
    setImage(null);
    setPreview("");
    setFeatured(true);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleDelete(slug: string) {
    saveProjects(projects.filter((project) => project.slug !== slug));
    setProjects(getStoredProjects());
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
        <h2 className="font-display text-lg font-extrabold text-charcoal-900">Add Project</h2>
        <p className="mt-1 text-sm text-charcoal-500">Title, details and photo — press Add & Publish when done.</p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Project Title *</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required className="form-input" placeholder="e.g. Warehouse Construction" />
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Category</span>
              <select value={category} onChange={(e) => setCategory(e.target.value as ProjectCategory)} className="form-input">
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Status</span>
              <select value={status} onChange={(e) => setStatus(e.target.value as ProjectStatus)} className="form-input">
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Location</span>
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="form-input" placeholder="e.g. Kampala, Uganda" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Short Description (optional)</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="form-input" placeholder="What the project involves" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Photo *</span>
            <input onChange={handleImage} type="file" accept="image/*" className="form-input file:mr-3 file:rounded file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700" />
          </label>
          <label className="flex items-center gap-2 text-sm text-charcoal-700">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="h-4 w-4" />
            Feature on the Home page
          </label>
        </div>

        {preview && (
          <div className="mt-4 overflow-hidden rounded-xl border border-charcoal-100">
            <img src={preview} alt="Project preview" className="h-40 w-full object-cover" />
            <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-charcoal-500">Photo preview</p>
          </div>
        )}

        {error && <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
        {saved && (
          <p className="mt-4 flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            <CheckCircle2 className="h-5 w-5" /> Published in this browser.
          </p>
        )}

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
        >
          <FolderPlus className="h-4 w-4" /> Add & Publish
        </button>
      </form>

      <div className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
        <h2 className="font-display text-lg font-extrabold text-charcoal-900">Added by You ({projects.length})</h2>
        {projects.length === 0 ? (
          <p className="mt-4 text-sm text-charcoal-500">Nothing added yet. Use the form to add your first project.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {projects.map((project) => (
              <li key={project.slug} className="flex items-center gap-4 rounded-xl border border-charcoal-100 p-3">
                {project.image.src.startsWith("data:") ? (
                  <img src={project.image.src} alt={project.title} className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                ) : (
                  <ImagePlus className="h-14 w-14 shrink-0 rounded-lg bg-charcoal-100 p-3 text-charcoal-400" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-charcoal-900">{project.title}</p>
                  <p className="truncate text-xs text-charcoal-500">
                    {project.category} · {project.status}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(project.slug)}
                  aria-label={`Delete ${project.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-charcoal-400 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}