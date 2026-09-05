import { services, site } from "../../config/site";
import { LogoLockup } from "../Logo";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pt-32">
        <p className="eyebrow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-arc-green" />
          {site.locationShort} · Opening soon
        </p>

        <div className="relative mt-10 sm:mt-12">
          <LogoLockup />
        </div>

        <h1 className="mt-10 max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          MOVE BETTER.
          <br />
          FEEL BETTER.
          <br className="sm:hidden" />{" "}
          <span className="text-gradient">RECOVER BETTER.</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
          Sports massage, recovery treatments, and nutrition in Nenagh.
        </p>

        <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row">
          <a href="#services" className="btn-primary">
            See services
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative border-y border-white/8 bg-arc-void/70">
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...services, ...services].map((service, index) => (
              <span
                key={`${service.id}-${index}`}
                className="flex items-center gap-8 px-4 font-display text-sm tracking-[0.22em] text-white/40 uppercase"
              >
                {service.title}
                <span className="text-arc-green/70">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
