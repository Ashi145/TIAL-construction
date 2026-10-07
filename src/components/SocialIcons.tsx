type IconProps = { className?: string };

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3.9V21H3.5V8.5Zm6.4 0h3.74v1.71h.05c.52-.97 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 5.98V21h-3.9v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9.9V8.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.78.22 2.41.46.65.25 1.2.6 1.75 1.15.5.5.9 1.1 1.15 1.75.24.63.41 1.35.46 2.41.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.78-.46 2.41a4.9 4.9 0 0 1-1.15 1.75 4.9 4.9 0 0 1-1.75 1.15c-.63.24-1.35.41-2.41.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.41-.46a4.9 4.9 0 0 1-1.75-1.15 4.9 4.9 0 0 1-1.15-1.75c-.24-.63-.41-1.35-.46-2.41C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.41.25-.65.6-1.2 1.15-1.75a4.9 4.9 0 0 1 1.75-1.15c.63-.24 1.35-.41 2.41-.46C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 8.75a3.25 3.25 0 0 1 0 6.5Zm5.2-8.46a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" />
    </svg>
  );
}

export function TwitterIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.9 2H22l-7.2 8.2L23.3 22H16.8l-5.1-6.7L5.8 22H2.7l7.7-8.8L2 2h6.6l4.6 6.1L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.3 2c.2 1.2.8 2.3 1.7 3.1.8.8 1.8 1.4 2.9 1.6v2.8a7.4 7.4 0 0 1-3.3-.9v6.2c0 3.2-2.5 5.8-5.7 5.8a5.9 5.9 0 0 1-5.9-5.9c0-3.3 2.7-5.9 5.9-5.9.3 0 .6 0 .9.1v3a2.9 2.9 0 0 0-.9-.1A2.9 2.9 0 0 0 9 13.7a2.9 2.9 0 0 0 2.9 2.9 2.9 2.9 0 0 0 3-2.9V2h1.4Z" />
    </svg>
  );
}
