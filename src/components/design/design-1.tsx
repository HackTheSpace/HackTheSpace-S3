import React from "react";
import About from "../about/about";
import Tracks from "../tracks/tracks";
import PastEvents from "../past-events/past-events";
import Prizes from "../prizes/prizes";
import Faq from "../faq/faq";
import Scene from "../scenes/Scene1";
import Footer from "../footer/footer";
import Sponsors from "../sponsors/sponsors";
import Navbar from "../navbar/navbar";

type Props = {};

const Design1 = (props: Props) => {
  return (
    <div className="min-h-screen w-full max-w-screen overflow-x-hidden bg-white">
      {/* Fixed Navbar — rendered outside section wrappers so it overlays all */}
      <Navbar />

      {/* HOME section */}
      <section id="home" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Scene />
      </section>

      {/* ABOUT US section */}
      <section id="about" className="scroll-mt-16 md:scroll-mt-[70px]">
        <About />
      </section>

      {/* TRACKS section */}
      <section id="tracks" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Tracks />
      </section>

      {/* PAST EVENTS — also useful for TEAM/CONTACT targets */}
      <section id="past-events" className="scroll-mt-16 md:scroll-mt-[70px]">
        <PastEvents />
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Sponsors />
      </section>

      {/* PRIZES section */}
      <section id="prizes" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Prizes />
      </section>

      {/* FAQ — maps to CONTACT in nav */}
      <section id="faq" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Faq />
      </section>

      {/* TEAM section — inside footer area */}
      <section id="contact" className="scroll-mt-16 md:scroll-mt-[70px]">
        <Footer />
      </section>
    </div>
  );
};

export default Design1;
