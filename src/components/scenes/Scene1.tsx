"use client";
import GlassCard from "@/components/common/glass-card";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Scene() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isInsideViewport, setIsInsideViewport] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isPopped, setIsPopped] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; startX: number; startY: number; color: string }[]
  >([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Automatically reset click count if user stops clicking for 1.2 seconds
  useEffect(() => {
    if (clickCount > 0 && !isPopped) {
      const timeout = setTimeout(() => {
        setClickCount(0);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [clickCount, isPopped]);

  // Motion values for the outer glass ring (larger, slower spring)
  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);

  // Motion values for the inner core dot (smaller, faster spring)
  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  const outerSpringConfig = { damping: 30, stiffness: 180, mass: 0.6 };
  const innerSpringConfig = { damping: 20, stiffness: 350, mass: 0.2 };

  const outerXSpring = useSpring(outerX, outerSpringConfig);
  const outerYSpring = useSpring(outerY, outerSpringConfig);

  const innerXSpring = useSpring(innerX, innerSpringConfig);
  const innerYSpring = useSpring(innerY, innerSpringConfig);

  useEffect(() => {
    setIsMounted(true);
    if (hasPopped) return;

    const moveCursor = (e: MouseEvent) => {
      // Offset by half of outer ring size (64px -> -32)
      outerX.set(e.clientX - 32);
      outerY.set(e.clientY - 32);

      // Offset by half of inner dot size (8px -> -4)
      innerX.set(e.clientX - 4);
      innerY.set(e.clientY - 4);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleMouseOver = () => setIsInsideViewport(true);
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget || e.relatedTarget === document.documentElement) {
        setIsInsideViewport(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0 || isPopped) return; // Only track left clicks, ignore if already popped

      setClickCount((prev) => {
        if (prev >= 9) {
          // Trigger Pop!
          setIsPopped(true);

          // Generate 16 radial burst particles at click coordinates
          const colors = ["#1fbcd7", "#feb449", "#fe5c36"];
          const newParticles = Array.from({ length: 16 }).map((_, i) => ({
            id: Math.random() + i,
            startX: e.clientX,
            startY: e.clientY,
            color: colors[i % colors.length],
          }));
          setParticles(newParticles);

          // Mark permanently popped after 1 second
          setTimeout(() => {
            setHasPopped(true);
            setParticles([]);
          }, 1000);

          return 10;
        }
        return prev + 1;
      });
    };

    const handleSectionMouseLeave = (e: MouseEvent) => {
      if (isPopped || hasPopped) return;

      setIsPopped(true);

      // Generate 16 radial burst particles at cursor exit coordinates
      const colors = ["#1fbcd7", "#feb449", "#fe5c36"];
      const newParticles = Array.from({ length: 16 }).map((_, i) => ({
        id: Math.random() + i,
        startX: e.clientX,
        startY: e.clientY,
        color: colors[i % colors.length],
      }));
      setParticles(newParticles);

      setTimeout(() => {
        setHasPopped(true);
        setParticles([]);
      }, 1000);
    };

    const handleScrollPop = () => {
      if (isPopped || hasPopped) return;
      if (window.scrollY > window.innerHeight) {
        setIsPopped(true);

        // Calculate last known cursor coordinates
        const lastX = outerX.get() + 32;
        const lastY = outerY.get() + 32;

        const colors = ["#1fbcd7", "#feb449", "#fe5c36"];
        const newParticles = Array.from({ length: 16 }).map((_, i) => ({
          id: Math.random() + i,
          startX: lastX,
          startY: lastY,
          color: colors[i % colors.length],
        }));
        setParticles(newParticles);

        setTimeout(() => {
          setHasPopped(true);
          setParticles([]);
        }, 1000);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("scroll", handleScrollPop, { passive: true });

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener("mouseleave", handleSectionMouseLeave);
    }

    // Setup interactive hover list
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .glass-card",
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-run listener attachment if DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", handleScrollPop);
      if (sectionEl) {
        sectionEl.removeEventListener("mouseleave", handleSectionMouseLeave);
      }
      observer.disconnect();
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .glass-card",
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isPopped, hasPopped]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-linear-to-b from-white to-gray-100"
    >
      {/* Inner wrapper clips the hero content but lets the marquee overflow */}
      <div className="absolute inset-0 h-full overflow-hidden">
        {/* hero-bg.png — centered, contained, non-repeating */}
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center" />

        {/* Text overlays */}
        <h1 className="absolute top-24 sm:top-32 md:top-36 lg:top-38 xl:top-40 -left-10 sm:-left-5 md:left-0 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] uppercase text-gradient-brand leading-none font-russo">
          Hack
        </h1>
        <h1 className="absolute top-50 sm:top-56 -right-10 sm:-right-5 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] xl:text-[16rem] uppercase md:right-[40%] md:top-[40%] text-gradient-brand leading-none font-russo">
          The
        </h1>
        <h1 className="absolute top-[40%] sm:top-[42%] md:top-auto -left-10 sm:-left-5 md:left-auto md:right-20 md:bottom-27 lg:bottom-37 xl:bottom-47 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] uppercase text-gradient-brand leading-none font-russo">
          Space
        </h1>
        <h1 className="absolute bottom-80 sm:bottom-60 right-0 sm:right-5 text-[5rem] sm:text-[7rem] md:bottom-30 uppercase text-gradient-brand leading-none font-russo">
          3.0
        </h1>

        <Link
          href="https://forms.gle/PhjrTQ9jDwWiYcUS9"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-max z-21 top-[60%] sm:top-[62%] left-2 sm:left-4 right-auto md:right-auto md:mx-0 md:top-60 lg:top-70 xl:top-80 md:left-[15%] lg:left-[22%] xl:left-110"
          style={{ animation: "bounce-btn 2.4s ease-in-out infinite" }}
        >
          <GlassCard
            radius="2xl"
            className="p-1.5 sm:p-2 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-1 sm:gap-2 lg:gap-4"
          >
            <div className="bg-white flex items-center py-1.5 px-2.5 md:py-2 md:px-4 rounded-full">
              <span className="text-[11px] sm:text-sm md:text-2xl font-semibold text-gray-800 whitespace-nowrap font-poppins pr-1.5 md:pr-2">
                Register Now!
              </span>
              {/* Brand gradient circle with arrow */}
              <span
                className="register-arrow-btn flex items-center justify-center w-5 h-5 md:w-8 md:h-8"
                aria-hidden="true"
              >
                <FiArrowUpRight className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </span>
            </div>
          </GlassCard>
        </Link>

        {/* Join Discord */}
        <Link
          href="https://discord.gg/FJKTSgdxPX"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-max z-21 top-[60%] sm:top-[62%] right-2 sm:right-4 left-auto md:left-auto md:mx-0 md:top-auto md:bottom-70 lg:bottom-80 xl:bottom-90 md:right-[15%] lg:right-[22%] xl:right-95"
          style={{ animation: "bounce-btn 2.4s ease-in-out 0.4s infinite" }}
        >
          <GlassCard
            radius="2xl"
            className="p-1.5 sm:p-2 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-1 sm:gap-2 lg:gap-4"
          >
            <div className="bg-white flex items-center py-1.5 px-2.5 md:py-2 md:px-4 rounded-full">
              <span className="text-[11px] sm:text-sm md:text-2xl font-semibold text-gray-800 whitespace-nowrap font-poppins pr-1.5 md:pr-2">
                Join Discord
              </span>
              <span
                className="register-arrow-btn flex items-center justify-center w-5 h-5 md:w-8 md:h-8"
                aria-hidden="true"
              >
                <FaDiscord className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </span>
            </div>
          </GlassCard>
        </Link>

        {/* Address Card */}
        <Link
          href="https://www.google.com/maps/place/K.+J.+Somaiya+College+of+Engineering/@19.0728521,72.8973513,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c627a20bcaa9:0xb2fd3bcfeac0052a!8m2!3d19.072847!4d72.8999262!16zL20vMDYzenNf?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-max z-21 bottom-26 sm:bottom-20 left-0 right-0 mx-auto md:right-auto md:mx-0 md:bottom-50 md:left-24 lg:left-40 xl:left-56"
          style={{ animation: "bounce-btn 2.6s ease-in-out 0.8s infinite" }}
        >
          <GlassCard
            radius="2xl"
            className="p-3 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-2 sm:gap-3 lg:gap-4"
          >
            <div className="bg-white flex items-center py-2 px-6 rounded-full">
              <p className="text-black font-poppins text-[12px] md:text-base font-medium text-center leading-relaxed">
                K. J. Somaiya College of Engineering <br /> Vidyanagar,
                Vidyavihar (East) <br />
                Mumbai, Maharashtra, India 400077
              </p>
              <span className="register-arrow-btn ml-2" aria-hidden="true">
                <FaMapLocationDot size={22} color="white" />
              </span>
            </div>
          </GlassCard>
        </Link>

        {/* Date Card */}
        <Link
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20261009T000000Z/20261009T010000Z&text=My+Event"
          target="_blank"
          className="absolute w-max z-21 bottom-45   sm:bottom-40 md:top-32 lg:top-40 xl:top-48 left-0 right-0 mx-auto md:left-auto md:mx-0 md:right-24 lg:right-40 xl:right-56 h-fit"
          style={{ animation: "bounce-btn 2.5s ease-in-out 0.2s infinite" }}
        >
          <GlassCard
            radius="2xl"
            className="p-3 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 gap-2 sm:gap-3 lg:gap-4"
          >
            <div className="bg-white flex items-center py-2 px-4 rounded-full">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 whitespace-nowrap font-poppins pr-2">
                9-10 October 2026
              </span>
              <span className="register-arrow-btn ml-2" aria-hidden="true">
                <IoCalendarOutline size={22} color="white" />
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

      {/* Premium Glassmorphic Mouse Trailer */}
      {isMounted && isInsideViewport && !hasPopped && (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
          {/* Outer Glassmorphic Ring */}
          <motion.div
            animate={
              isPopped
                ? {
                    scale: 3,
                    opacity: 0,
                    borderWidth: "12px",
                  }
                : {
                    scale: 1 + clickCount * 0.18,
                    opacity: 1,
                  }
            }
            transition={
              isPopped
                ? { duration: 0.35, ease: "easeOut" }
                : { type: "spring", stiffness: 300, damping: 20 }
            }
            style={{
              x: outerXSpring,
              y: outerYSpring,
              width: isHovered ? 96 : 64,
              height: isHovered ? 96 : 64,
            }}
            className="absolute rounded-full border border-white/35 bg-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out"
          />

          {/* Inner Core Dot with brand gradient glow */}
          <motion.div
            animate={
              isPopped
                ? {
                    scale: 4,
                    opacity: 0,
                  }
                : {
                    scale: (isHovered ? 1.5 : 1) * (1 + clickCount * 0.1),
                    opacity: 1,
                  }
            }
            transition={
              isPopped
                ? { duration: 0.25, ease: "easeOut" }
                : { type: "spring", stiffness: 300, damping: 20 }
            }
            style={{
              x: innerXSpring,
              y: innerYSpring,
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#1fbcd7] via-[#feb449] to-[#fe5c36] shadow-[0_0_10px_rgba(254,92,54,0.6)] transition-transform duration-300"
          />

          {/* Burst Particles */}
          {particles.map((p, idx) => {
            const angle = (idx / particles.length) * Math.PI * 2;
            const distance = 80 + Math.random() * 60;
            const targetX = Math.cos(angle) * distance - 4; // offset half width of particle (8px -> -4)
            const targetY = Math.sin(angle) * distance - 4;

            return (
              <motion.div
                key={p.id}
                initial={{
                  x: p.startX - 4,
                  y: p.startY - 4,
                  scale: 1.2,
                  opacity: 1,
                }}
                animate={{
                  x: p.startX + targetX,
                  y: p.startY + targetY,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}, inset 0 1px 1px rgba(255,255,255,0.8)`,
                }}
              />
            );
          })}
        </div>
      )}

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
