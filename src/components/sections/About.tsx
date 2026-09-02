import { qualifications, site } from "../../config/site";

export function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-inner grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-4">I’m {site.practitioner.name}.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
            <p>
              I’m opening Athletic Recovery Clinic in Nenagh. I work with
              people who are tight, sore, tired, or carrying muscular pain.
            </p>
            <p>
              I’m in the gym, I kickbox, and I train Brazilian jiu-jitsu. I’ve
              had my own injuries too — a grade 3 tibia fracture, repeated
              rotator cuff tears — so I know what it’s like when your body
              stops you training.
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
                Qualifications
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2.5 text-[0.95rem] leading-snug text-white/80">
                  {qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
