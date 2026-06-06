import React from "react";
import Title from "../common/title";
import { BrandMarquee, GlassMarquee } from "../common/marquees"; // Changed import
import Image from "next/image";

const PastEvents = () => {
  const images = [
    "/assets/prev-gallary/HackTheSpaceS2 (500).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (573).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (598).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (606).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (614).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (648).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (662).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (768).jpg"
  ];

  const images2 = [
    "/assets/prev-gallary/HackTheSpaceS2 (772).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (785).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (920).jpg",
    "/assets/prev-gallary/HackTheSpaceS2 (924).jpg",
    "/assets/prev-gallary/IMG_20240927_123508.jpg",
    "/assets/prev-gallary/ShutterStories-287.jpg",
    "/assets/prev-gallary/ShutterStories-541.jpg",
    "/assets/prev-gallary/the_shutterstories-1.jpg",
    "/assets/prev-gallary/the_shutterstories-3.jpg",
  ]

  // Helper to render image cards
  const renderImageCards = (items: string[],color?:string) => {
    const borderStyle = color ? { borderColor: color } : { borderColor: '#ef4444' };
    return (
    <>
      {items.map((src, index) => (
        <div key={index}>
          <div
            className={`relative ${index % 2 ? "h-32 sm:h-48 md:h-64" : "h-40 sm:h-56 md:h-72"} w-32 sm:w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden bg-white/10 border backdrop-blur-md shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300`}
            style={borderStyle}
          >
            {/* Card Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <Image
              src={src}
              alt={`Event image ${index + 1}`}
              height={600}
              width={600}
              quality={100}
              className="object-cover drop-shadow-lg h-full w-full"
            />
          </div>
        </div>
      ))}
      {/* Duplicate for smooth loop */}
      {items.map((src, index) => (
        <div key={`dup-${index}`}>
          <div
            className={`relative ${index % 2 ? "h-32 sm:h-48 md:h-64" : "h-40 sm:h-56 md:h-72"} w-32 sm:w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden bg-white/10 border backdrop-blur-md shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300`}
            style={borderStyle}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Image
              src={src}
              alt={`Event image ${index + 1}`}
              width={600}
              height={600}
              quality={100}
              className="object-cover drop-shadow-lg h-full w-full"
            />
          </div>
        </div>
      ))}
    </>
  )};

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center py-10 sm:py-20 my-10 sm:my-20 overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-100 bg-[url('/assets/graphs/grid.svg')] bg-contain bg-center" />

      {/* Title Section */}
      <div className="z-40 mb-10 md:mb-20">
        <Title title="GLIMPSES" />
      </div>

      {/* Main Content Container - Rotated */}
      <div className="relative w-full flex flex-col h-full items-center justify-center mt-4 sm:mt-10">
        {/* Background Text Marquee */}
        <div className="rotate-[4deg] md:rotate-2 flex items-center justify-center opacity-90 z-0 w-[150%] md:w-[120%]">
          <BrandMarquee direction="left" speed="80s" />
        </div>
        {/* Row 1 */}
        <div className="w-[150%] md:w-[120%] relative flex items-center justify-center py-2 sm:py-3">
          {/* Foreground Image Marquee */}
          <div className="z-10 w-full">
            <GlassMarquee
              direction="left"
              className="overflow-visible! py-2 sm:py-4"
              color="#1FBCD7"
              speed="150s"
            >
              {renderImageCards(images,'#1FBCD7')}
            </GlassMarquee>
          </div>
        </div>

        <div className="-rotate-[4deg] md:-rotate-6 flex items-center justify-center opacity-90 z-15 w-[150%] md:w-[120%] mt-4 sm:mt-0">
          <BrandMarquee direction="right" speed="80s" />
        </div>

        {/* Row 2 */}
        <div className="w-[150%] md:w-[120%] relative flex items-center justify-center py-2 sm:py-3">
          {/* Foreground Image Marquee */}
          <div className="z-10 w-full">
            <GlassMarquee direction="right" className="overflow-visible! py-2 sm:py-4" speed="150s">
              {renderImageCards(images2)}
            </GlassMarquee>
          </div>
        </div>
        <div className="rotate-[4deg] md:rotate-4 flex items-center justify-center opacity-90 z-8 w-[150%] md:w-[120%] mt-4 sm:mt-0">
          <BrandMarquee direction="left" speed="80s" />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
