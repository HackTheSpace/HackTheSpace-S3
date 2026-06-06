"use client";

import Content1 from "../common/content-1";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative mb-10 sm:mb-28 md:mb-10 lg:mb-20 py-10 overflow-hidden flex flex-col items-center w-full">
      {/* Content 1 */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "10px" }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <Content1
          title="ABOUT US"
          preTitle="Who We Are"
          content={
            <>
              We're a community of builders, learners, and tech enthusiasts
              working together to grow the computer science space - one project,
              one conversation, one event at a time.{" "}
              <span className="font-bold">HackTheSpace</span> started as a
              regional initiative and has since grown into a movement that
              brings together developers, designers, and innovators from across
              India and beyond. We believe that great ideas deserve great
              platforms, and that's exactly what we're building, a space where{" "}
              <span className="font-bold italic">ambition</span> meets{" "}
              <span className="font-bold italic">opportunity</span>, and where
              the next generation of tech leaders can learn, connect, and
              thrive.
            </>
          }
        />
      </motion.div>

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
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "10px" }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <Content1
          title="HACKTHESPACE ?"
          preTitle="What Is"
          content={
            <>
              <span className="font-bold">HackTheSpace</span> is a 24-hour offline hackathon where you go
              from idea to prototype - <span className="font-bold italic">FAST</span>. Every season, students and
              early-career builders come together on a shared physical stage to
              tackle real problems, explore emerging technologies, and ship
              something they're genuinely proud of. No gatekeeping, no fluff,
              just you, your team, and 24 hours to build something that matters.
              Whether it's your first hackathon or your tenth, <span className="font-bold">HackTheSpace</span> is where you
              show up, level up, and make your <span className="font-bold italic">mark</span>.
            </>
          }
        />
        <div className="w-full flex justify-center">
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
              scale: [1, 1.02, 1],
              filter: [
                "drop-shadow(0 4px 12px rgba(31, 188, 215, 0.4))",
                "drop-shadow(0 4px 20px rgba(254, 92, 54, 0.55))",
                "drop-shadow(0 4px 12px rgba(31, 188, 215, 0.4))",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-[500px] flex justify-center"
          >
            <Image
              src="/assets/graphs/box-circle.svg"
              alt="box circle"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
