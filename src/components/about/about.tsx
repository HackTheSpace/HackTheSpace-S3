import Content1 from "../common/content-1";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative mb-20 sm:mb-28 md:mb-32 lg:mb-40 py-10 overflow-hidden flex flex-col items-center w-full">
      
      {/* Content 1 */}
      <div className="relative z-10 w-full">
        <Content1
          title="ABOUT US"
          preTitle="Who We Are ?"
          content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night
            will enable you to channel your creative persona, pushing the bounds
            of imagination and possibility to ideate, innovate, and develop
            something truly out of the world. Inspired by the famous painting,
            HackTheSpace 2023: A Starry Night."
        />
      </div>

      {/* Background Tunnel (Overlapping top & bottom by ~40%) */}
      <div className="relative z-0 w-full flex justify-center opacity-60 pointer-events-none -my-[40%] lg:-my-[400px]">
        <Image
          src="/assets/graphs/tunnel.svg"
          alt="tunnel background"
          width={1000}
          height={1000}
          className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-[1000px] h-auto"
        />
      </div>

      {/* Content 2 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Content1
          title="HACKTHESPACE ?"
          preTitle="What Is"
          content="Inspired by the famous painting, HackTheSpace 2023: A Starry Night will enable you to channel your creative persona, pushing the bounds of imagination and possibility to ideate, innovate, and develop something truly out of the world. Inspired by the famous painting, HackTheSpace 2023: A Starry Night."
        />
        <div className="w-full flex justify-center mt-10 sm:mt-12 md:mt-16">
          <Image
            src="/assets/graphs/box-circle.svg"
            alt="box circle"
            width={500}
            height={500}
            className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
