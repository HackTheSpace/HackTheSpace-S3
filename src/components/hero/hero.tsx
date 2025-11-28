import React from "react";
import GradiantButton from "./buttons/gradiant-button";
import AnimatedButton from "./buttons/animated-button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="relative w-full h-screen bg-white
    before:content-[''] before:absolute before:inset-0 before:bg-[url('/assets/Vector.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-20"
    >
      <nav className="relative z-10 p-4">
        <img
          src="/assets/logo/Color/logo-vertical.png"
          alt="hts-logo"
          className="w-fit h-20"
        />
      </nav>
      <div className="flex flex-col justify-center items-center gap-20 mt:gap-36 xl:gap-40 mt-20">
        <section className="z-10 flex flex-col gap-5">
          <div
            id="hero-text"
            className="font-ruigslay text-3xl md:text-5xl lg:text-7xl xl:text-8xl py-5 text-center text-gradient-brand"
          >
            We are going Global!
          </div>
          <div className="text-center font-poppins text-md xl:text-xl font-light text-gray-600">
            <span className="font-bold italic">
              Every once in a while, a new technology, an old problem, and a big
              idea turn into an innovation.
            </span>{" "}<br/>
            <div className="italic w-full text-right px-14">- Dean Kamen</div> <br/>
            What begins here doesn’t end here… it  <span className="italic">launches </span>forward, <span className="font-bold">welcome in!</span>
          </div>
        </section>
        <section
          id="hero-buttons"
          className="z-10 flex justify-center flex-col md:flex-row items-center gap-4 "
        >
          <GradiantButton content="Pre-Register" />
          <AnimatedButton className="z-10">
            <GradiantButton content="Sponsor Us" className="b-0" />
          </AnimatedButton>
          <GradiantButton content="Join Discord" />
        </section>

        <div className="text-center font-qurova text-2xl animate-pulse text-gray-400 font-light">
          Website Loading Soon......
        </div>
      </div>
      <div className="absolute bottom-0 left-2 w-1/3 h-1/2 animate-grow-up">
        <img
          src="/assets/side-line.svg"
          className="w-full h-full scale-x-[-1]"
          alt="hero-decoration"
        />
      </div>
      <div className="absolute bottom-0 right-2 w-1/3 h-1/2 animate-grow-up">
        <img
          src="/assets/side-line.svg"
          className="w-full h-full"
          alt="hero-decoration"
        />
      </div>
    </div>
  );
};

export default Hero;
