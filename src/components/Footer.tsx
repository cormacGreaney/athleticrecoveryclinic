import { navLinks, site } from "../config/site";
import { BrandLink } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-arc-void">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <BrandLink />
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Sports massage, recovery treatments, and nutrition.{" "}
            {site.locationShort}. {site.statusLine}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </nav>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.locationShort}, Ireland</p>
        </div>
      </div>
    </footer>
  );
}
