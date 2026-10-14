"use client";

import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { nav } from "@/data/content";

const ids = nav.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Main" className="sticky top-0 z-10 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-page items-center gap-4 px-5 py-3">
        <a href="#top" aria-label="DAN Web Studio home" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element -- two logo versions swap with the theme */}
          <img className="logo-light h-11 w-auto sm:h-12" src="/img/logo-light.png" alt="DAN Web Studio" width={161} height={48} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-dark h-11 w-auto sm:h-12" src="/img/logo-dark.png" alt="" aria-hidden="true" width={161} height={48} />
        </a>
        <ul className="ml-auto flex gap-6 text-small font-semibold">
          {nav.map((l, i) => {
            const current = active === l.id;
            return (
              // On phones only "Contact" stays visible
              <li key={l.id} className={i < nav.length - 1 ? "hidden md:block" : ""}>
                <a
                  href={`#${l.id}`}
                  aria-current={current ? "true" : undefined}
                  className={`hover:text-fg ${current ? "text-fg underline decoration-accent decoration-2 underline-offset-8" : "text-muted"}`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
