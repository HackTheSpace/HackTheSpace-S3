import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  zIndex?: number;
  style?: React.CSSProperties;
  speed?: string;
  pauseOnHover?: boolean;
}

export const Marquee = ({
  children,
  direction = "left",
  className = "",
  zIndex = 0,
  style = {},
  speed = "35s",
  pauseOnHover = true,
}: MarqueeProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden group ${className}`}
      style={{ zIndex, ...style }}
    >
      <div
        className={`flex min-w-max items-center gap-8 py-2 ${pauseOnHover ? "hover:[animation-play-state:paused]!" : ""} ${
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

export const BrandMarquee = ({
  zIndex = 10,
  className = "",
  direction = "left",
  speed = "35s",
}: {
  zIndex?: number;
  className?: string;
  direction?: "left" | "right";
  speed?: string;
}) => {
  return (
    <div className={`w-full z-30 ${className}`} style={{ zIndex }}>
      {/* thin brand-gradient top border line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg,#f97316,#14b8a6,#f97316)",
        }}
      />
      
      <Marquee
        direction={direction}
        className="bg-white"
        speed={speed}
        pauseOnHover={false}
      >
        <div className="flex min-w-max items-center py-1">
          {Array.from({ length: 12 }).map((_, i) => (
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
                className="w-2 h-2 rounded-full shrink-0 bg-black/20"
              />
            </span>
          ))}
        </div>
      </Marquee>

      {/* thin brand-gradient bottom border line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg,#f97316,#14b8a6,#f97316)",
        }}
      />
    </div>
  );
};
