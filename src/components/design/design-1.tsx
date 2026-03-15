import React from "react";
import About from "../about/about";
import SponsorCard from "../common/sponsor-card";
import Tracks from "../tracks/tracks";
import PastEvents from "../past-events/past-events";
import Prizes from "../prizes/prizes";
import Faq from "../faq/faq";
import Scene from "../scenes/Scene1";
import Footer from "../footer/footer";
import Sponsors from "../sponsors/sponsors";

type Props = {};

const Design1 = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Scene />
      <About />
      <Tracks />
      <PastEvents />
      <Sponsors />
      <Prizes />
      <Faq />
      <Footer />
    </div>
  );
};

export default Design1;
