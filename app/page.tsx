import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Process, Services, Work } from "@/components/Sections";
import ClosingFooter from "@/components/ClosingFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
      </main>
      <ClosingFooter />
    </>
  );
}
