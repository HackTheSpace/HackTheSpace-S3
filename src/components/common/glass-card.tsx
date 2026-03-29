"use client";
import React, { useId } from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Border radius preset: 'pill' | 'xl' | 'lg' | 'md' | 'none'. Defaults to 'xl'. */
  radius?: "pill" | "xl" | "lg" | "md" | "none" | "2xl";
  /** Extra inline styles */
  style?: React.CSSProperties;
  /** Displacement scale — higher = more warping. Defaults to 18. */
  displacementScale?: number;
};

const radiusMap: Record<NonNullable<GlassCardProps["radius"]>, string> = {
  pill: "9999px",
  "2xl": "35px",
  xl: "24px",
  lg: "18px",
  md: "12px",
  none: "0px",
};

/**
 * GlassCard — liquid-glass displacement effect.
 *
 * Effect breakdown:
 *  - SVG feTurbulence + feDisplacementMap warps the backdrop (real glass refraction)
 *  - Thin semi-transparent white tint over the displaced layer
 *  - Top-edge specular streak (refraction highlight)
 *  - Convex inner glow for thick-glass depth
 *  - Drop shadow for lift
 */
const GlassCard = ({
  children,
  className = "",
  radius = "xl",
  style,
  displacementScale = 18,
}: GlassCardProps) => {
  const uid = useId().replace(/:/g, "");
  const filterId = `glass-disp-${uid}`;
  const borderRadius = radiusMap[radius];

  return (
    <>
      {/* Hidden SVG that defines the displacement filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id={filterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            {/* Subtle organic turbulence texture */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65 0.75"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            {/* Scale the noise map to shift brightness into displacement range */}
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="greyNoise"
            />
            {/* Displace the source graphic using the noise map */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="greyNoise"
              scale={displacementScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Slight composite blur to soften harsh displacement edges */}
            <feGaussianBlur in="displaced" stdDeviation="0.4" />
          </filter>
        </defs>
      </svg>

      <div
        className={`glass-card ${className}`}
        style={
          {
            borderRadius,
            "--glass-filter-id": `url(#${filterId})`,
            ...style,
          } as React.CSSProperties
        }
      >
        {/* Displacement layer — warps everything behind the card */}
        <span
          className="glass-card__disp"
          aria-hidden="true"
          style={{ borderRadius }}
        />
        {/* Top specular highlight streak */}
        <span className="glass-card__streak" aria-hidden="true" />
        {/* Content */}
        <div className="glass-card__content">{children}</div>
      </div>
    </>
  );
};

export default GlassCard;
