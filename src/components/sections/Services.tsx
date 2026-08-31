import { services } from "../../config/site";
import { serviceIcons } from "../icons";

export function Services() {
  return (
    <section id="services" className="section-wrap">
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-4">What I offer</h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Sports massage, recovery treatments, and nutrition.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.id];
            return (
              <li key={service.id} className="service-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-arc-green">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/58">
                  {service.copy}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
