import React from "react";
import Content1 from "../common/content-1";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40">
      <Content1
        title="ABOUT US"
        preTitle="Who We Are ?"
        content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night
          will enable you to channel your creative persona, pushing the bounds
          of imagination and possibility to ideate, innovate, and develop
          something truly out of the world. Inspired by the famous painting,
          HackTheSpace 2023: A Starry Night."
      />
      <div className="w-full flex justify-center -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-42">
        <Image
          src="/assets/graphs/tunnel.svg"
          alt="tunnel"
          width={1000}
          height={1000}
          className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-[1000px] h-auto"
        />
      </div>
      <Content1
        title="HACKTHESPACE ?"
        preTitle="What Is"
        content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world. Inspired by the famous painting, HackTheSpace 2023: A Starry Night."
      />
      <div className="w-full flex justify-center mt-10 sm:mt-8 md:mt-0">
        <Image
          src="/assets/graphs/box-circle.svg"
          alt="tunnel"
          width={500}
          height={500}
          className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default About;
