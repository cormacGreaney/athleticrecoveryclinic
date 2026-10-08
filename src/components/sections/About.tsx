import Image from "next/image";
import clinicTreatment from "../../../public/images/clinic-treatment.jpg";
import danielTraining from "../../../public/images/daniel-training.jpg";
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
              My name is Daniel Nolan, and I run Athletic Recovery Clinic here
              in Nenagh. I help people who feel tight, sore, tired, or limited
              by muscular pain — whether you’re an athlete, someone who trains
              casually, or someone who simply wants your body to feel normal
              again. If pain or restricted movement is affecting your work,
              training, or everyday life, my job is to help you move better
              and feel better.
            </p>
            <p>
              I’m active myself — I lift, kickbox, and train Brazilian
              jiu-jitsu — so I understand the demands that training and daily
              life put on the body. I’ve also dealt with my own injuries,
              including a grade 3 tibia fracture and repeated rotator cuff
              tears, so I know how frustrating it is when pain stops you from
              doing the things you enjoy.
            </p>
            <p>
              I’m currently studying and developing my skills to be able to
              treat sports injuries properly and safely. In the future, I plan
              to progress into physiotherapy or a similar clinical path,
              building on the hands-on work I do now so I can offer even more
              advanced treatment and rehabilitation treatments.
            </p>
            <p>
              ARC is built for everyone — athletes, workers, parents,
              students, older adults, and anyone dealing with muscular pain,
              stiffness, or movement issues. My goal is simple: reduce pain,
              improve mobility, and help you get back to living the way you
              want.
            </p>
            <p>
              The clinic is now taking bookings from {site.bookingFrom} —
              new and existing clients welcome.
            </p>
          </div>
        </div>

        <aside className="space-y-5">
          <figure className="photo-frame relative aspect-[4/5]">
            <Image
              src={clinicTreatment}
              alt="Daniel Nolan treating a client at Athletic Recovery Clinic"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover object-top"
            />
          </figure>
          <div className="surface-card p-7 sm:p-8">
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
                  Now booking
                </dt>
                <dd className="mt-1 text-white/85">From {site.bookingFrom}</dd>
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
          </div>
        </aside>
      </div>

      <div className="section-inner mt-10 sm:mt-14">
        <figure className="photo-frame relative aspect-[3/2]">
          <Image
            src={danielTraining}
            alt="Daniel Nolan during a training session"
            fill
            sizes="(min-width: 72rem) 72rem, 100vw"
            placeholder="blur"
            className="object-cover object-[center_30%]"
          />
        </figure>
      </div>
    </section>
  );
}
