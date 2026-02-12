"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gradient?: string;
  filter?: "glow-0" | "glow-1";
  className?: string;
}

export default function GlowButton({
  children,
  gradient = "#0000 0% 25%, #1fbcd7 25%, #feb449 38%, #fe5c36 50%",
  filter = "glow-0",
  className = "",
  ...props
}: GlowButtonProps) {
  return (
    <>
      <svg width="0" height="0" aria-hidden="true" className="fixed">
        <filter id="glow-0" x="-.25" y="-.25" width="1.5" height="1.5">
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 2 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2" />
          <feComponentTransfer result="rond">
            <feFuncA type="table" tableValues="-2 3" />
          </feComponentTransfer>
          <feMorphology operator="dilate" radius="3" />
          <feGaussianBlur stdDeviation="6" />
          <feBlend in="rond" result="glow" />
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="0 0 1" />
          </feComponentTransfer>
          <feBlend in2="glow" />
        </filter>

        {/* Optional second glow variant (not used unless prop == 'glow-1') */}
        <filter id="glow-1" x="-.25" y="-.25" width="1.5" height="1.5">
          <feComponentTransfer in="SourceGraphic" result="grad">
            <feFuncA type="table" tableValues="0 2 0" />
          </feComponentTransfer>
          <feMorphology operator="dilate" radius="3" />
          <feGaussianBlur stdDeviation="6" result="glow" />
          <feTurbulence type="fractalNoise" baseFrequency="7.13" />
          <feDisplacementMap in="glow" scale="12" yChannelSelector="R" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".8" />
          </feComponentTransfer>
          <feBlend in="grad" result="out" />
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="0 0 1" />
          </feComponentTransfer>
          <feBlend in2="out" />
        </filter>
      </svg>

      <div
        {...props}
        style={{ "--l": gradient } as React.CSSProperties}
        className={`
          relative rounded-xl font-semibold text-black
          border-2 border-transparent
          bg-[repeating-conic-gradient(from_var(--a),var(--l))]
          filter [filter:url(#${filter})]
          animate-spin-slow
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
}
