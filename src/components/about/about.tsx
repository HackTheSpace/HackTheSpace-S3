import React from "react";
import Content1 from "../common/content-1";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <Content1
        title="ABOUT US"
        preTitle="Who We Are ?"
        content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night
          will enable you to channel your creative persona, pushing the bounds
          of imagination and possibility to ideate, innovate, and develop
          something truly out of the world. Inspired by the famous painting,
          HackTheSpace 2023: A Starry Night."
      />
      <div className="w-full flex justify-center -mt-42">
        <Image src="/assets/graphs/tunnel.svg" alt="tunnel"  width={1000} height={1000}/>
      </div>
      <Content1 title="HACKTHESPACE ?" preTitle="What Is" content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world. Inspired by the famous painting, HackTheSpace 2023: A Starry Night." />
    </div>
  );
};

export default About;
