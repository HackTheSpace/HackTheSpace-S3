"use client";

import React, { useLayoutEffect, useRef } from "react";
import SponsorCard from "../common/sponsor-card";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tracks = [
  {
    title: "Generative AI & Machine Learning",
    icon: "/assets/tracks/ai-ml.svg",
    color: "#FF9F1C",
  },
  {
    title: "Open Innovation",
    icon: "/assets/tracks/idea.svg",
    color: "#2EC4B6",
  },
  {
    title: "Security & Audits",
    icon: "/assets/tracks/security.svg",
    color: "#E71D36",
  },
  {
    title: "Internet of Things",
    icon: "/assets/tracks/iot.svg",
    color: "#C77DFF",
  },
  {
    title: "Augmented & Virtual Reality",
    icon: "/assets/tracks/ai-ml.svg",
    color: "#8338EC",
  },
  {
    title: "Blockchain & Crypto",
    icon: "/assets/tracks/blockchain.svg",
    color: "#3A86FF",
  },
  {
    title: "Cloud & Devops",
    icon: "/assets/tracks/idea.svg",
    color: "#FB5607",
  },
];

const Tracks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const radius = 370;

      // ✅ Set initial state immediately (prevents flicker)
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.5,
          xPercent: -50,
          yPercent: -50,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const finalAngle = index * (360 / tracks.length) - 90;

        const proxy = {
          radius: 0,
          angle: finalAngle + 90,
          opacity: 0,
          scale: 0.5,
        };

        tl.to(
          proxy,
          {
            radius,
            angle: finalAngle,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 1,
            onUpdate: () => {
              const rad = (proxy.angle * Math.PI) / 180;
              const x = Math.cos(rad) * proxy.radius;
              const y = Math.sin(rad) * proxy.radius;

              gsap.set(card, {
                x,
                y,
                opacity: proxy.opacity,
                scale: proxy.scale,
              });
            },
          },
          0
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-full min-h-screen overflow-hidden my-28"
    >
      {/* ✅ FULLSCREEN BACKGROUND */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-full z-0">
        <Image
          src="/assets/graphs/track-bg-grid.svg"
          alt="Background Grid"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Center Title */}
        <div className="absolute z-30 text-center">
          <h1 className="text-4xl md:text-6xl font-ruigslay text-gradient-brand">
            Tracks
          </h1>
        </div>

        {/* Circular Cards */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          {tracks.map((track, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute left-1/2 top-1/2 pointer-events-auto"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
