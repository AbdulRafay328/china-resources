import { LogoMark } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep text-sm text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <LogoMark className="h-6 w-auto" />
          <span>China Resources &amp; Infrastructure Company</span>
        </div>
        <p>© 2026 CRI. All rights reserved.</p>
      </div>
    </footer>
  );
}
