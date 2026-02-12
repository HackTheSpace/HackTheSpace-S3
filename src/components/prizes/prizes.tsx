import Image from "next/image";
import Title from "../common/title";

const PrizeCard = ({
  place,
  amount,
  isMain = false,
  color,
}: {
  place: string;
  amount: string;
  isMain?: boolean;
  color: string;
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-between p-1 border rounded-2xl backdrop-blur-[1px] transition-transform duration-300 hover:scale-105 ${
        isMain ? "w-64 h-80 z-10 -mt-8" : "w-56 h-72"
      }`}
      style={{
        background: `linear-gradient(180deg, ${color}20 0%, rgba(255, 255, 255, 0.1) 100%)`,
        borderColor: color,
        boxShadow: `0 0 20px ${color}30`,
      }}
    >
      {/* Trophy Section */}
      <div className="flex-1 flex items-center justify-center w-full relative">
        <div className="relative w-40 h-40">
          {/* Glow effect behind trophy */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl"
            style={{ backgroundColor: `${color}60` }}
          />
          <Image
            src="/assets/trophy.svg"
            alt={`${place} Trophy`}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full bg-white/80 backdrop-blur-md rounded-xl p-4 text-center mt-2 border border-white/50">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
          {place}
        </p>
        <h3 className="text-2xl font-bold text-black font-ruigslay">
          {amount}
        </h3>
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[6px] z-10"
        style={{
          background: `linear-gradient(180deg, ${color}20 0%, rgba(255,255,255,0.1) 100%)`,
        }}
      />

      {/* Bottom Arrow */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2
             w-6 h-6 rotate-45
             border-r border-b backdrop-blur-[1px] z-20"
        style={{
          background: `rgba(255,255,255,0.8)`,
          borderColor: color,
          boxShadow: `0 8px 16px ${color}30`,
        }}
      />
    </div>
    
  );
};

const Prizes = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/assets/graphs/landscape.svg')] bg-center bg-cover flex flex-col items-center overflow-hidden py-20 gap-20">
      {/* Background Landscape
      <div className="absolute inset-x-0 bottom-0 pointer-events-none w-full h-1/2 z-0">
        <Image
          src="/assets/graphs/landscape.svg"
          alt="Landscape Background"
          fill
          className="object-cover object-bottom"
        />
      </div> */}

      <Title title="PRIZES" />

      {/* Cards Container */}
      <div className="relative z-10 flex items-end justify-center gap-8 md:gap-12 mt-56">
        {/* 2nd Prize */}
        <PrizeCard place="2nd Prize Winner" amount="INR 20K" color="#1fbcd7" />

        {/* 1st Prize (lifted up) */}
        <div className="relative -translate-y-32 md:-translate-y-44">
          <PrizeCard
            place="1st Prize Winner"
            amount="INR 40K"
            isMain={true}
            color="#feb449"
          />
        </div>

        {/* 3rd Prize */}
        <PrizeCard place="3rd Prize Winner" amount="INR 10K" color="#fe5c36" />
      </div>
    </section>
  );
};

export default Prizes;
