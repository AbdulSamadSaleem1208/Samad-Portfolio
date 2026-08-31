import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-muted md:flex-row md:items-center md:px-8">
        <a href="#main" className="transition hover:text-violet">
          © {new Date().getFullYear()} {profile.name}
        </a>
        <a href="#bridge" className="gradient-text">
          Business · FinTech · Technology
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-violet">
          Islamabad, Pakistan
        </a>
      </div>
    </footer>
  );
}
