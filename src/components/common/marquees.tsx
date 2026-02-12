import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  zIndex?: number;
  style?: React.CSSProperties;
}

export const Marquee = ({
  children,
  direction = "left",
  className = "",
  zIndex = 0,
  style = {},
}: MarqueeProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden group ${className}`}
      style={{ zIndex, ...style }}
    >
      <div
        className={`flex min-w-max items-center gap-8 py-2 hover:[animation-play-state:paused]! ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

const MarqueeItem = ({ highlightColor }: { highlightColor: string }) => (
  <div className="flex items-center gap-6 whitespace-nowrap">
    <span className="text-white text-3xl font-qurova">Hackthespace</span>
    <div className="h-2 w-2 rounded-full bg-white" />
    <span className="text-3xl font-qurova" style={{ color: highlightColor }}>
      2000+ Participant
    </span>
  </div>
);

export const BlackMarquee = ({
  zIndex = 10,
  className = "",
  direction = "left",
  highlightColor = "#1FBCD7",
}: {
  zIndex?: number;
  className?: string;
  direction?: "left" | "right";
  highlightColor?: string;
}) => {
  return (
    <Marquee
      zIndex={zIndex}
      direction={direction}
      className={`bg-black/85 border-y overflow-hidden ${className}`}
    >
      <div className="flex min-w-max items-center gap-16 pr-16">
        {Array.from({ length: 12 }).map((_, i) => (
          <MarqueeItem key={i} highlightColor={highlightColor} />
        ))}
      </div>
    </Marquee>
  );
};

export const GlassMarquee = ({
  zIndex = 20,
  className = "",
  children,
  direction = "right",
  color = "#FE5C36", // Default tint color
}: {
  zIndex?: number;
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  color?: string;
}) => {
  // Styles derived from SponsorCard
  // backgroundColor: `${color}1A` -> 10% opacity
  // borderColor: color
  // backdrop-blur-[1px]
  // border-[1.5px]

  const containerStyle: React.CSSProperties = {
    borderColor: color,
    backgroundColor: `${color}1A`,
  };

  return (
    <Marquee
      zIndex={zIndex}
      direction={direction}
      className={`border-[1.5px] backdrop-blur-[1px] ${className}`}
      style={containerStyle}
    >
      <div className="flex items-center gap-8 pr-8">{children}</div>
    </Marquee>
  );
};
