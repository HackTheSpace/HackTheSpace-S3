import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  zIndex?: number;
  style?: React.CSSProperties;
  speed?: string;
}

export const Marquee = ({
  children,
  direction = "left",
  className = "",
  zIndex = 0,
  style = {},
  speed = "35s",
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
        style={{ animationDuration: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

const MarqueeItem = ({ highlightColor }: { highlightColor: string }) => (
  <div className="flex items-center gap-3 md:gap-6 whitespace-nowrap">
    <span className="text-white text-xl sm:text-2xl md:text-3xl font-qurova">Hackthespace</span>
    <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white" />
    <span className="text-xl sm:text-2xl md:text-3xl font-qurova" style={{ color: highlightColor }}>
     <span className="font-poppins"> 2000+</span> Participant
    </span>
  </div>
);

export const BlackMarquee = ({
  zIndex = 10,
  className = "",
  direction = "left",
  highlightColor = "#1FBCD7",
  speed = "35s",
}: {
  zIndex?: number;
  className?: string;
  direction?: "left" | "right";
  highlightColor?: string;
  speed?: string;
}) => {
  return (
    <Marquee
      zIndex={zIndex}
      direction={direction}
      className={`bg-black/85 border-y overflow-hidden ${className}`}
      speed={speed}
    >
      <div className="flex min-w-max items-center gap-8 md:gap-16 pr-8 md:pr-16 py-1 md:py-0">
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
  speed = "35s",
}: {
  zIndex?: number;
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  color?: string;
  speed?: string;
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
      speed={speed}
    >
      <div className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8 py-0.5 md:py-0">{children}</div>
    </Marquee>
  );
};
