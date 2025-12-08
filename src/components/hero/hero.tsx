"use client"
import GradiantButton from "./buttons/gradiant-button";
import AnimatedButton from "./buttons/animated-button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="relative p-4 flex flex-col w-full h-dvh overflow-y-hidden bg-white
    before:content-[''] before:z-0 before:absolute before:inset-0 before:bg-[url('/assets/Vector.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-20"
    >
      <nav className="absolute top-0 left-0 z-10 p-4 w-full">
        <img
          src="/assets/logo/Color/logo-vertical.png"
          alt="hts-logo"
          className="w-fit max-w-1/5 h-7 md:h-12 lg:h-17 xl:h-20"
        />
      </nav>
      <div className="flex flex-col justify-between grow items-center mt-30 md:mt-40 mb-12 md:mb-20">
        <section className="z-10 flex flex-col gap-5">
          <div
            id="hero-text"
            className="font-ruigslay text-3xl md:text-5xl lg:text-7xl xl:text-8xl py-5 text-center text-gradient-brand"
          >
            We are going Global!
          </div>
          <div className="text-center font-poppins text-sm md:text-md xl:text-xl font-light text-gray-600">
            <span className="font-bold italic">
              Every once in a while, a new technology, an old problem, and a big
              idea turn into an innovation.
            </span>{" "}<br/>
            <span className="italic block w-full text-right px-1">- Dean Kamen</span> <br/>
            <span className="text-xs md:text-sm lg:text-base">
            What begins here doesn’t end here… it  <span className="italic">launches </span>forward, <span className="font-bold">welcome in!</span>
            </span>
          </div>
        </section>
        <section
          id="hero-buttons"
          className="z-10 flex justify-between flex-col md:flex-row items-center gap-4 "
        >
          <GradiantButton content="Pre-Register" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScTY_Nv3eAi0u5UrtLjakjW0OJEbVzX00fj-ZciY0-oDtff2Q/viewform"/>
          <AnimatedButton className="z-10">
            <GradiantButton content="Sponsor Us" className="b-0" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdIO6KIM825CeSJTb70R7kqyCLRtFsLfnHRx9nEH7yC9lH9Ew/viewform"/>
          </AnimatedButton>
          <GradiantButton content="Join Discord" target="_blank" href="https://discord.com/invite/FJKTSgdxPX"/>
        </section>

        <div className="text-center flex flex-col gap-10 items-center z-10">
         <span className=" font-qurova text-md md:text-2xl animate-pulse text-gray-400 font-light">Website Loading Soon......</span>
         <GradiantButton href="https://s2.hackthespace.co"  className="w-fit" content="Checkout Past Seasons" target="_blank"/>
        </div>
      </div>
      <div className="absolute bottom-0 left-2 w-[30%] h-fit max-h-1/5 md:max-h-1/2 animate-grow-up">
        <img
          src="/assets/side-line.svg"
          className="w-full h-full scale-x-[-1]"
          alt="hero-decoration"
        />
      </div>
      <div className="absolute bottom-0 right-2 w-[30%] h-fit max-h-1/5 md:max-h-1/2 animate-grow-up">
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
