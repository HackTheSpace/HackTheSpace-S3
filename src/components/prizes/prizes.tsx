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
      className={`relative flex flex-col items-center justify-between p-1 border rounded-xl sm:rounded-2xl backdrop-blur-[1px] transition-transform duration-300 hover:scale-105 ${
        isMain ? "w-[100px] sm:w-40 md:w-56 lg:w-64 h-[140px] sm:h-52 md:h-64 lg:h-80 z-10 -mt-2 sm:-mt-4 md:-mt-8" : "w-[80px] sm:w-32 md:w-48 lg:w-56 h-[115px] sm:h-44 md:h-56 lg:h-72"
      }`}
      style={{
        background: `linear-gradient(180deg, ${color}20 0%, rgba(255, 255, 255, 0.1) 100%)`,
        borderColor: color,
        boxShadow: `0 0 20px ${color}30`,
      }}
    >
      {/* Trophy Section */}
      <div className="flex-1 flex items-center justify-center w-full relative">
        <div className="relative w-12 sm:w-20 md:w-32 lg:w-40 h-12 sm:h-20 md:h-32 lg:h-40">
          {/* Glow effect behind trophy */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 sm:w-16 md:w-20 lg:w-24 h-8 sm:h-16 md:h-20 lg:h-24 rounded-full blur-md sm:blur-xl md:blur-2xl"
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
      <div className="w-full bg-white/80 backdrop-blur-md rounded-md sm:rounded-xl p-1 sm:p-2 md:p-4 text-center mt-1 sm:mt-2 border border-white/50">
        <p className="text-[7px] sm:text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-tighter sm:tracking-wider mb-0 sm:mb-1 leading-none sm:leading-normal">
          {place}
        </p>
        <h3 className="text-[10px] sm:text-lg md:text-xl lg:text-2xl font-bold text-black font-ruigslay leading-tight sm:leading-normal">
          {amount}
        </h3>
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-8 md:w-10 h-[4px] md:h-[6px] z-10"
        style={{
          background: `linear-gradient(180deg, ${color}20 0%, rgba(255,255,255,0.1) 100%)`,
        }}
      />

      {/* Bottom Arrow */}
      <div
        className="absolute -bottom-1.5 sm:-bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2
             w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rotate-45
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
    <section className="relative w-full min-h-[50vh] md:min-h-screen bg-[url('/assets/graphs/landscape.svg')] bg-bottom bg-size-[250%_auto] sm:bg-size-[150%_auto] md:bg-cover bg-no-repeat flex flex-col items-center justify-start md:justify-start overflow-hidden pt-10 pb-4 sm:py-20 gap-6 md:gap-20">

      <div className="md:mt-0 mb-20 md:mb-0">
        <Title title="PRIZES" />
      </div>

      {/* Cards Container */}
      <div className="relative z-10 flex flex-row items-end justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 mt-0 md:mt-56 px-2">

        {/* 2nd Prize */}
        <PrizeCard place="2nd Prize" amount="INR 20K" color="#1fbcd7" />

        {/* 1st Prize (lifted up) */}
        <div className="relative -translate-y-6 sm:-translate-y-16 md:-translate-y-32 lg:-translate-y-44">
          <PrizeCard
            place="1st Prize"
            amount="INR 40K"
            isMain={true}
            color="#feb449"
          />
        </div>

        {/* 3rd Prize */}
        <PrizeCard place="3rd Prize" amount="INR 10K" color="#fe5c36" />
        
      </div>
    </section>
  );
};

export default Prizes;
