"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Star = {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
  color: string;
  size: number;
};

const LOG_MESSAGES = [
  { threshold: 0, text: "[SYSTEM] Booting orbital transceiver..." },
  { threshold: 12, text: "[THRUSTERS] Charging fusion core generators..." },
  { threshold: 25, text: "[GRAVITY] Synchronizing localized gravity wells..." },
  { threshold: 38, text: "[NAVIGATION] Calibrating starmaps & jump coordinates..." },
  { threshold: 50, text: "[SHIELDS] Activating plasma deflector grid..." },
  { threshold: 62, text: "[DATA] Syncing Season 3.0 databanks... CONNECTED" },
  { threshold: 75, text: "[COGNITIVE] Mapping operator neural frequencies..." },
  { threshold: 88, text: "[PORTAL] Initiating spatial fold: 10,000 GEV..." },
  { threshold: 97, text: "[ACCESS] Welcome to Hack The Space. Enjoy the ride." },
];

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [warpActive, setWarpActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Handle the 5-second loading countdown
  useEffect(() => {
    const duration = 4800; // Complete loading slightly before 5 seconds for transition cushion
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Start warp effect when reaching 100%
        setWarpActive(true);
        // Let warp play for 800ms, then trigger complete callback
        setTimeout(() => {
          onComplete();
        }, 850);
      }
    };

    requestAnimationFrame(updateProgress);

    // Track mouse coordinates for interactive space dust parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.15;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [onComplete]);

  // Handle log messages appending based on loading progress
  useEffect(() => {
    const currentLogs = LOG_MESSAGES.filter((log) => progress >= log.threshold).map(
      (log) => log.text
    );
    setTerminalLogs(currentLogs);
  }, [progress]);

  // Starfield canvas simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 150 stars
    const starCount = 150;
    const maxDepth = 1000;
    const colors = ["#1fbcd7", "#feb449", "#fe5c36"];

    const initStars = () => {
      const temp: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        temp.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * maxDepth,
          px: 0,
          py: 0,
          color: colors[i % colors.length],
          size: Math.random() * 1.5 + 0.5,
        });
      }
      starsRef.current = temp;
    };

    initStars();

    const fov = 200;
    let baseSpeed = 0.8;
    let warpFactor = 1;

    const render = () => {
      if (!canvas || !ctx) return;

      // Light futuristic space background with light trail clearing
      // When warp is active, leave longer trails (semi-transparent clear Rect)
      if (warpActive) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        warpFactor = Math.min(100, warpFactor * 1.15); // Accelerate warp speed
        baseSpeed = 2 + warpFactor * 0.8;
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        // Warp speed builds up slightly with loading progress
        baseSpeed = 0.8 + (progress / 100) * 1.5;
      }
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse parallax drift
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2 + mouse.x;
      const centerY = height / 2 + mouse.y;

      starsRef.current.forEach((star) => {
        // Move star closer
        star.z -= baseSpeed;

        // Reset star if it passes the screen
        if (star.z <= 0) {
          star.z = maxDepth;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.px = 0;
          star.py = 0;
        }

        // Project 3D coordinate to 2D screen
        const k = fov / star.z;
        const x = star.x * k + centerX;
        const y = star.y * k + centerY;

        // Only draw if within screen bounds
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath();
          
          if (warpActive && star.px !== 0) {
            // Draw warp streaks (lines pointing outwards)
            ctx.strokeStyle = star.color;
            ctx.lineWidth = star.size * (1 + warpFactor * 0.15);
            ctx.moveTo(star.px, star.py);
            ctx.lineTo(x, y);
            ctx.stroke();
          } else {
            // Draw floating stars
            const size = star.size * (1 - star.z / maxDepth) * 2;
            ctx.fillStyle = star.color;
            ctx.arc(x, y, Math.max(0.2, size), 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Store previous projected positions for streaks
        star.px = x;
        star.py = y;
      });

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [warpActive, progress]);

  // Center SVG ring stroke calculations
  const strokeRadius = 70;
  const strokeCircumference = 2 * Math.PI * strokeRadius;
  const strokeDashoffset = strokeCircumference - (progress / 100) * strokeCircumference;

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-between py-12 px-6 overflow-hidden select-none select-none font-poppins">
      {/* 3D Starfield Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none block" />

      {/* Ambient Grid overlay to enhance digital sci-fi look */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between opacity-80 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs tracking-widest font-mono text-emerald-600 uppercase font-semibold">
            Transceiver Link [STABLE]
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs tracking-widest font-mono text-slate-600 uppercase font-semibold">
            HACK THE SPACE // <span className="text-[#fe5c36]">SEASON 3.0</span>
          </span>
        </div>
      </div>

      {/* Center Cinematic Cyber HUD */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        <motion.div
          animate={warpActive ? { scale: 5, opacity: 0 } : { scale: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-64 h-64 flex items-center justify-center"
        >
          {/* Animated Glow effect */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-[#1fbcd7]/10 via-[#feb449]/10 to-[#fe5c36]/10 blur-xl animate-pulse" />

          {/* SVG Rotating Concentric HUD rings */}
          <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1fbcd7" />
                <stop offset="60%" stopColor="#feb449" />
                <stop offset="100%" stopColor="#fe5c36" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer Ring (Static) */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
              strokeDasharray="40 10 10 10 50 15"
            />

            {/* Middle Ring (Static) */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgba(31, 188, 215, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="20 15 5 15"
            />

            {/* Circular Glowing Progress Ring */}
            <circle
              cx="100"
              cy="100"
              r={strokeRadius}
              fill="none"
              stroke="rgba(0, 0, 0, 0.04)"
              strokeWidth="4"
            />
            <motion.circle
              cx="100"
              cy="100"
              r={strokeRadius}
              fill="none"
              stroke="url(#brand-grad)"
              strokeWidth="4"
              strokeDasharray={strokeCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              filter="url(#glow)"
              transform="rotate(-90 100 100)"
            />

            {/* Micro-scale markers */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 100 + Math.cos(angle) * 72;
              const y1 = 100 + Math.sin(angle) * 72;
              const x2 = 100 + Math.cos(angle) * 76;
              const y2 = 100 + Math.sin(angle) * 76;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(0,0,0,0.15)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Central Percentage Display */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-russo font-bold tracking-widest text-slate-800 leading-none relative">
              {progress}
              <span className="text-lg font-light text-cyan-500 absolute -top-1 -right-4">%</span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-cyan-600/80 uppercase mt-2 animate-pulse">
              LOADING DATA
            </span>
          </div>
        </motion.div>
      </div>

      {/* System Diagnostic Logs Terminal */}
      <div className="relative z-10 w-full max-w-xl h-28 bg-slate-50/80 border border-slate-200/50 rounded-lg p-4 font-mono text-left overflow-hidden shadow-xl backdrop-blur-md">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1fbcd7]/30 via-[#feb449]/30 to-[#fe5c36]/30" />
        <div className="w-full h-full flex flex-col justify-end text-xs leading-relaxed space-y-1 select-text">
          <AnimatePresence initial={false}>
            {terminalLogs.slice(-4).map((log, i) => (
              <motion.div
                key={log}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`${
                  i === Math.min(terminalLogs.length, 4) - 1
                    ? "text-slate-800 font-semibold"
                    : "text-slate-500/80"
                } truncate`}
              >
                <span className="text-[#fe5c36]/80 mr-1.5">&gt;&gt;</span>
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cybernetic side borders / visual decors */}
      <div className="absolute top-1/2 left-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#1fbcd7]/30 to-transparent -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#fe5c36]/30 to-transparent -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
