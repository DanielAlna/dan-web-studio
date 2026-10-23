import { nav, site } from "@/data/content";
import ContactForm from "./ContactForm";

const explore = [...nav.filter((l) => l.id !== "contact"), { id: "about", label: "About" }];

/** The page ends with one band: contact form on the right, footer links on the left. */
export default function ClosingFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-h" className="bg-gradient-to-br from-band to-band-2 text-band-muted">
      <div className="mx-auto grid max-w-page items-start gap-x-16 gap-y-10 px-5 pb-12 pt-16 md:grid-cols-closing md:pt-20">
        <div className="md:col-start-1 md:row-start-1">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest">Contact</p>
          <h2 id="contact-h" className="mb-3 text-section font-extrabold tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p>Tell us what you&apos;re working on, whether it&apos;s a new website, a custom application, or an existing system that needs attention. A rough idea is enough to start the conversation.</p>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <ContactForm />
        </div>

        <div className="grid gap-8 self-end md:col-start-1 md:row-start-2">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo */}
            <img src="/img/logo-white.png" alt="DAN Web Studio" width={161} height={48} className="h-12 w-auto" />
            <p className="mt-3.5 max-w-[34ch] text-small">Custom websites, web applications, and internal tools for growing businesses.</p>
          </div>
          <div className="grid max-w-sm grid-cols-2 gap-6 text-small">
            <nav aria-label="Footer">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70">Explore</h3>
              <ul className="grid gap-2">
                {explore.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="text-white hover:text-orange-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70">Connect</h3>
              <ul className="grid gap-2">
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener" className="text-white hover:text-orange-200">
                    LinkedIn
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-2 border-t border-white/10 px-5 py-4 font-mono text-xs">
        <span>© {new Date().getFullYear()} DAN Web Studio</span>
        <a href="#top" className="text-white hover:text-orange-200">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
