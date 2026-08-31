import { site, whoItsFor } from "../../config/site";

export function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-inner grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-4">I’m {site.practitioner.name}.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
            <p>
              I’m opening Athletic Recovery Clinic in Nenagh. I work with
              people who are tight, sore, tired, or carrying muscular pain.
            </p>
            <p>
              I also do sports nutrition — plans for training, recovery, and
              general health.
            </p>
            <p>
              The new space is being set up. I’ll take existing and new
              clients once it’s ready.
            </p>
          </div>
        </div>

        <aside className="surface-card p-7 sm:p-8">
          <p className="font-display text-xl font-semibold tracking-tight text-white">
            {site.practitioner.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-arc-green">
            {site.practitioner.title}
          </p>
          <dl className="mt-8 space-y-5 border-t border-white/8 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
                Based in
              </dt>
              <dd className="mt-1 text-white/85">{site.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
                What I do
              </dt>
              <dd className="mt-1 text-white/85">
                Sports massage, recovery treatments, nutrition
              </dd>
            </div>
          </dl>
          <ul className="mt-8 flex flex-wrap gap-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs tracking-wide text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
