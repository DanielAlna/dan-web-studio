import { aiNote, founder, services, steps, workIntro, clients } from "@/data/content";
import ClientWork from "./ClientWork";

function Heading({ id, eyebrow, title, sub }: { id: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <>
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 id={id} className="mb-3 text-section font-extrabold tracking-tight">
        {title}
      </h2>
      {sub && <p className="mb-8 max-w-measure text-muted">{sub}</p>}
    </>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-h" className="py-16">
      <div className="mx-auto max-w-page px-5">
        <Heading
          id="services-h"
          eyebrow="Services"
          title="How DAN Web Studio can help"
          sub="Projects range from a first company website to custom software for an established business. Most start with a specific need, like a site that's hard to update or a process that lives in spreadsheets and email."
        />
        <div className="border-t border-line">
          {services.map((s) => (
            <div key={s.title} className="grid items-baseline gap-x-10 gap-y-2 border-b border-line py-6 lg:grid-cols-service">
              <h3 className="text-service font-extrabold tracking-tight">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
              <p className="font-mono text-meta font-medium text-accent lg:text-right">{s.stack.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid items-center gap-4 rounded-xl border border-line bg-bg px-6 py-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-5">
          <span className="justify-self-start whitespace-nowrap rounded-full bg-accent-soft px-2.5 py-1 font-mono text-meta text-accent">{aiNote.label}</span>
          <div>
            <strong className="block text-lead">{aiNote.title}</strong>
            <p className="mt-1 text-small text-muted">{aiNote.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-h" className="bg-bg-alt py-16">
      <div className="mx-auto max-w-page px-5">
        <Heading
          id="process-h"
          eyebrow="How it works"
          title="How a project works"
          sub="Before development begins, you'll have an outline of the proposed work, priorities, timeline, and estimated cost."
        />
        {/* One line with four stops: horizontal on wide screens, vertical on phones */}
        <ol className="relative grid gap-6 pl-9 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-line md:grid-cols-4 md:pl-0 md:pt-0 md:before:bottom-auto md:before:left-2 md:before:right-2 md:before:top-2 md:before:h-0.5 md:before:w-auto">
          {steps.map((step, i) => (
            <li key={step.title} className="relative md:pt-9">
              <span
                aria-hidden="true"
                className={`absolute -left-9 top-1 h-[18px] w-[18px] rounded-full border-2 border-accent md:left-0 md:top-0 ${i === steps.length - 1 ? "bg-accent" : "bg-bg-alt"}`}
              />
              <h3 className="mb-1.5 text-title font-extrabold">
                <span className="mr-2 font-mono text-meta font-medium text-muted">0{i + 1}</span>
                {step.title}
              </h3>
              <p className="text-small text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="py-16">
      <div className="mx-auto max-w-page px-5">
        <Heading id="work-h" eyebrow="Past work" title="Selected client work" sub={workIntro} />
        <ClientWork clients={clients} />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="bg-bg-alt py-16">
      <div className="mx-auto grid max-w-page items-start gap-6 px-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
        <figure className="grid justify-items-start gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- small portrait */}
          <img src="/img/daniel.jpg" alt={founder.name} width={150} height={150} className="h-28 w-28 rounded-2xl object-cover ring-1 ring-line sm:h-36 sm:w-36" />
          <figcaption className="grid text-sm leading-snug">
            <b>{founder.name}</b>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">{founder.role}</span>
          </figcaption>
        </figure>
        <div>
          <Heading id="about-h" eyebrow="About" title="About DAN Web Studio" />
          {founder.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mb-3 max-w-measure text-lead">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
