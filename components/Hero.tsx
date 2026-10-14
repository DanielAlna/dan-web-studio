import { hero } from "@/data/content";

/** A browser window frame around a screenshot */
function Window({ url, src, className }: { url: string; src: string; className: string }) {
  return (
    <div className={`win absolute overflow-hidden rounded-lg border border-white/60 bg-white shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-2.5 py-2">
        <i className="h-2 w-2 rounded-full bg-slate-300" />
        <i className="h-2 w-2 rounded-full bg-slate-300" />
        <i className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="ml-2.5 truncate rounded bg-white px-2.5 font-mono text-[0.68rem] text-slate-600">{url}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative screenshot */}
      <img src={src} alt="" className="block h-auto w-full" />
    </div>
  );
}

/** The wind animation layers. Styling lives in globals.css. */
function Gust() {
  return (
    <div className="gust">
      <b className="cloud c1" />
      <b className="cloud c2" />
      <b className="cloud c3" />
      {["f1", "f2", "f3", "f4"].map((k) => (
        <span key={k} className={`far ${k}`} />
      ))}
      {["m1", "m2", "m3"].map((k) => (
        <span key={k} className={`mid ${k}`} />
      ))}
      {["n1", "n2", "n3"].map((k) => (
        <span key={k} className={`near ${k}`} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-hero-bg">
      <div className="diag" aria-hidden="true">
        <div className="diag-blue" />
        <div className="diag-edge" />
        <Gust />
      </div>

      <div className="relative mx-auto grid max-w-page items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-hero md:pb-20 md:pt-[4.5rem]">
        <div className="stagger">
          <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-sm font-medium text-muted">
            <span aria-hidden="true" className="status-dot h-2 w-2 rounded-full bg-orange" />
            {hero.status}
          </p>
          <h1 className="text-display font-extrabold tracking-tight">
            {hero.title} <em className="not-italic text-accent">{hero.titleAccent}</em>
          </h1>
          <p className="mt-4 font-bold">
            {hero.offer.map((o, i) => (
              <span key={o} className="whitespace-nowrap">
                {i > 0 && <span className="mx-1.5 text-accent" aria-hidden="true">·</span>}
                {o}
              </span>
            ))}
          </p>
          <p className="mt-3.5 max-w-[52ch] text-lead text-muted">{hero.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-orange px-6 py-3 font-bold text-white hover:brightness-105">
              Start a project
            </a>
            <a href="#work" className="rounded-lg border border-line bg-bg px-6 py-3 font-bold text-fg hover:border-accent">
              See past work
            </a>
          </div>
        </div>

        <div className="relative aspect-collage w-full max-w-xl" aria-hidden="true">
          <Window url="getwizer.com" src="/img/wizer-hero.jpg" className="left-0 top-[4%] w-[74%]" />
          <Window url="b.log-on.com" src="/img/logon-1.jpg" className="win-2 right-0 top-[44%] w-[66%]" />
          {/* Elbit shown on a phone, from the original device mockup */}
          <div className="win win-3 absolute bottom-0 left-[6%] w-[23%] rounded-3xl bg-slate-900 px-1.5 pb-3.5 pt-2 shadow-2xl ring-1 ring-white/10">
            <i className="mx-auto mb-2 block h-1 w-1/3 rounded bg-slate-700" />
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative screenshot */}
            <img src="/img/elbit-phone.jpg" alt="" className="block h-auto w-full rounded" />
          </div>
        </div>
      </div>
    </header>
  );
}
