"use client";
import GlassCard from "@/components/common/glass-card";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Scene() {
  return (
    <section className="relative w-full h-screen bg-linear-to-b from-white to-gray-100">
      {/* Inner wrapper clips the hero content but lets the marquee overflow */}
      <div className="absolute inset-0 h-full overflow-hidden">
        {/* hero-bg.png — centered, contained, non-repeating */}
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center" />

        {/* Text overlays */}
        <h1 className="absolute top-24 sm:top-32 md:top-40 lg:top-44 xl:top-46 -left-10 sm:-left-5 md:left-0 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] uppercase text-gradient-brand leading-none font-russo">
          Hack
        </h1>
        <h1 className="absolute top-50 sm:top-56 -right-10 sm:-right-5 text-[7rem] sm:text-[9rem] md:hidden uppercase text-gradient-brand leading-none font-russo">
          The
        </h1>
        <h1 className="absolute top-[40%] sm:top-[42%] md:top-auto -left-10 sm:-left-5 md:left-auto md:right-0 md:bottom-60 lg:bottom-70 xl:bottom-80 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] uppercase text-gradient-brand leading-none font-russo">
          Space
        </h1>
        <h1 className="absolute bottom-80 sm:bottom-72 right-0 sm:right-5 text-[5rem] sm:text-[7rem] md:hidden uppercase text-gradient-brand leading-none font-russo">
          3.0
        </h1>

        <Link
          href="https://forms.gle/PhjrTQ9jDwWiYcUS9"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-max z-21 top-[58%] sm:top-[60%] md:top-50 lg:top-56 xl:top-60 left-0 right-0 mx-auto md:right-auto md:mx-0 md:left-[15%] lg:left-[22%] xl:left-110"
          style={{ animation: "bounce-btn 2.4s ease-in-out infinite" }}
        >
          <GlassCard radius="2xl" className="p-3 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-2 sm:gap-3 lg:gap-4">
            <div className="bg-white flex items-center py-2 px-4 rounded-full">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 whitespace-nowrap font-poppins pr-2">
                Register Now!
              </span>
              {/* Brand gradient circle with arrow */}
              <span className="register-arrow-btn" aria-hidden="true">
                <FiArrowUpRight size={20} color="white" />
              </span>
            </div>
          </GlassCard>
        </Link>

        {/* Join Discord */}
        <Link
          href="https://discord.gg/FJKTSgdxPX"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-max z-21 top-[70%] sm:top-[72%] md:top-auto left-0 right-0 mx-auto md:left-auto md:mx-0 md:bottom-50 lg:bottom-60 xl:bottom-70 md:right-[15%] lg:right-[22%] xl:right-95"
          style={{ animation: "bounce-btn 2.4s ease-in-out 0.4s infinite" }}
        >
          <GlassCard radius="2xl" className="p-3 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-2 sm:gap-3 lg:gap-4">
            <div className="bg-white flex items-center py-2 px-4 rounded-full">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 whitespace-nowrap font-poppins pr-2">
                Join Discord
              </span>
              <span className="register-arrow-btn" aria-hidden="true">
                <FaDiscord size={20} color="white" />
              </span>
            </div>
          </GlassCard>
        </Link>

        {/* glass-astro.svg — pinned to the bottom, full width */}
        <img
          src="/assets/glass-astro.svg"
          alt="Glass Astro"
          className="absolute bottom-0 md:top-0 left-1/2 -translate-x-1/2 w-[170%] sm:w-[140%] md:w-[110%] lg:w-[80%] xl:w-[72%] max-w-none pointer-events-none select-none z-20"
        />

        <div
          className="absolute left-0 bottom-0 w-full h-1/5 z-22 backdrop-blur-lg pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 50%)",
          }}
        />
      </div>
      {/* end inner overflow-hidden wrapper */}

      {/* ── Marquee Strip ── */}
      <div
        className="absolute -bottom-6 left-0 w-full z-30"
        style={{
          background: "#ffffff",
          transform: "rotate(1.5deg) scaleX(1.15)",
          transformOrigin: "center bottom",
          clipPath: "inset(0)",
        }}
      >
        {/* thin brand-gradient top border line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg,#f97316,#14b8a6,#f97316)",
          }}
        />

        <div
          className="flex whitespace-nowrap py-3 bg-white"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {/* Duplicate the content twice for seamless loop */}
          {[...Array(2)].map((_, gi) => (
            <span key={gi} className="flex items-center shrink-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center gap-5 px-5">
                  <span className="text-black/80 text-sm sm:text-base md:text-lg lg:text-xl font-qurova font-medium tracking-widest uppercase">
                    Hackthespace
                  </span>
                  <span
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-bold tracking-widest uppercase"
                    style={{
                      background: "linear-gradient(90deg,#f97316,#14b8a6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SEASON 3.0
                  </span>
                  {/* bullet dot */}
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "white" }}
                  />
                </span>
              ))}
            </span>
          ))}
        </div>
        {/* thin brand-gradient bottom border line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg,#f97316,#14b8a6,#f97316)",
          }}
        />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes bounce-btn {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
