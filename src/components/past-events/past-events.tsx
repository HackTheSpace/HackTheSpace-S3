import React from "react";
import Title from "../common/title";
import { Marquee, BlackMarquee, GlassMarquee } from "../common/marquees"; // Changed import
import Image from "next/image";

const PastEvents = () => {
  const images = [
    "/assets/anime-night-sky-illustration.jpg",
    "/assets/anime-style-character-space.jpg",
    "/assets/sample-image-1.png",
    "/assets/sample-image-2.png",
    "/assets/sample-image-1.png",
    "/assets/sample-image-2.png",
  ];

  // Helper to render image cards
  const renderImageCards = (items: string[],color?:string) => {
    const borderColor = color ? `border-[${color}]` : "border-red-500";
    return (
    <>
      {items.map((src, index) => (
        <div key={index}>
          <div
            key={index}
            className={`relative ${index % 2 ? "h-48 md:h-64" : "h-56 md:h-72"} w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden bg-white/10 border ${borderColor} backdrop-blur-md shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300`}
          >
            {/* Card Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <Image
              src={src}
              alt={`Event image ${index + 1}`}
              height={180}
              width={180}
              className="object-cover drop-shadow-lg h-full w-full"
            />
          </div>
        </div>
      ))}
      {/* Duplicate for smooth loop */}
      {items.map((src, index) => (
        <div key={`dup-${index}`}>
          <div
            key={`dup-${index}`}
            className={`relative ${index % 2 ? "h-48 md:h-64" : "h-56 md:h-72"} w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden bg-white/10 border ${borderColor} backdrop-blur-md shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Image
              src={src}
              alt={`Event image ${index + 1}`}
              width={180}
              height={180}
              className="object-cover drop-shadow-lg h-full w-full"
            />
          </div>
        </div>
      ))}
    </>
  )};

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center py-20 my-20 overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-100 bg-[url('/assets/graphs/grid.svg')] bg-contain bg-center" />

      {/* Title Section */}
      <div className="z-40 mb-10 md:mb-20 scale-90 md:scale-100">
        <Title title="PAST EVENTS" />
      </div>

      {/* Main Content Container - Rotated */}
      <div className="relative w-full flex flex-col items-center justify-center mt-10">
        {/* Background Text Marquee */}
        <div className="rotate-6 flex items-center justify-center opacity-90 z-0 scale-110">
          <BlackMarquee direction="left" highlightColor="#1FBCD7" />
        </div>
        {/* Row 1 */}
        <div className="w-[120%] relative flex items-center justify-center py-3">
          {/* Foreground Image Marquee */}
          <div className="z-10 w-full">
            <GlassMarquee
              direction="left"
              className="overflow-visible! py-4"
              color="#1FBCD7"
            >
              {renderImageCards(images,'#1FBCD7')}
            </GlassMarquee>
          </div>
        </div>

        <div className="-rotate-6 flex items-center justify-center opacity-90 z-15 scale-110">
          <BlackMarquee direction="right" highlightColor="#1FBCD7" />
        </div>

        {/* Row 2 */}
        <div className="w-[120%] relative flex items-center justify-center py-3">
          {/* Foreground Image Marquee */}
          <div className="z-10 w-full">
            <GlassMarquee direction="right" className="overflow-visible! py-4">
              {renderImageCards(images)}
            </GlassMarquee>
          </div>
        </div>
        <div className="rotate-6 flex items-center justify-center opacity-90 z-8 scale-110">
          <BlackMarquee direction="left" highlightColor="#1FBCD7" />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
