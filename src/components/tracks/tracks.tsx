"use client";
import React from "react";
import SponsorCard from "../common/sponsor-card";
import Image from "next/image";

const tracks = [
  {
    title: "Generative AI & Machine Learning",
    icon: "/assets/tracks/ai-ml.svg",
    color: "#FF9F1C", // Orange
  },
  {
    title: "Open Innovation",
    icon: "/assets/tracks/idea.svg",
    color: "#2EC4B6", // Teal
  },
  {
    title: "Security & Audits",
    icon: "/assets/tracks/security.svg",
    color: "#E71D36", // Red
  },
  {
    title: "Internet of Things",
    icon: "/assets/tracks/iot.svg",
    color: "#C77DFF", // Purple
  },
  {
    title: "Augmented & Virtual Reality",
    icon: "/assets/tracks/ai-ml.svg",
    color: "#8338EC", // Violet
  },
  {
    title: "Blockchain & Crypto",
    icon: "/assets/tracks/blockchain.svg",
    color: "#3A86FF", // Blue
  },
  {
    title: "Cloud & Devops",
    icon: "/assets/tracks/idea.svg",
    color: "#FB5607", // Orange/Red
  },
];

const Tracks = () => {
  const radius = 350; // Radius of the circle

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background Grid */}
      <div className="absolute left-auto right-auto w-[80%] inset-0 z-0 flex items-center bg-[url('/assets/graphs/track-bg-grid.svg')] bg-cover bg-no-repeat bg-center justify-center pointer-events-none">
        {/* <Image
          src="/assets/graphs/track-bg-grid.svg"
          alt="Background Grid"
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        /> */}
      </div>

      {/* Central Title */}
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-ruigslay text-gradient-brand">
          Tracks
        </h1>
      </div>

      {/* Track Cards distributed in a circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {tracks.map((track, index) => {
          // Distribute items starting from top (-90 degrees)
          const angle = index * (360 / tracks.length) - 90;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 pointer-events-auto"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="transition-transform duration-300 hover:scale-110">
                <SponsorCard
                  title={track.title}
                  image={track.icon}
                  alt={track.title}
                  color={track.color}
                  variant={index % 2 === 0 ? "small" : "large"}
                  className="w-48 h-56 shadow-lg hover:shadow-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
