import { site } from "../../config/site";
import { IconInstagram, IconMail, IconPhone, IconPin } from "../icons";

const contacts = [
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: IconPhone,
    external: false,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: IconMail,
    external: false,
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    icon: IconInstagram,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="section-inner grid gap-10 md:grid-cols-[1fr_1.05fr] md:gap-14">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-4">Get in touch</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            The clinic is still being set up. If you want to book or ask a
            question, here’s how to reach me.
          </p>
        </div>

        <div className="surface-card overflow-hidden">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex min-h-[4.75rem] items-center gap-4 border-b border-white/8 px-6 py-4 transition-colors hover:bg-white/3 sm:px-8"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-arc-green/12 text-arc-green">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </span>
                  <span className="mt-1 block font-display text-lg text-white">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}

          <div className="flex items-center gap-4 px-6 py-5 sm:px-8">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/4 text-white/80">
              <IconPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Location
              </p>
              <p className="mt-1 font-display text-lg text-white">
                {site.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
