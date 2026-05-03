import React from "react";
import Title from "../common/title";

// Dynamic list of sponsor images
const sponsorsList = [
  // Top Tier
  { id: 1, name: "AWS", logo: "/assets/past-sponsors/aws.png" },
  { id: 37, name: "Diamante", logo: "/assets/past-sponsors/diamante.png" },
  {
    id: 4,
    name: "GitHub Black",
    logo: "/assets/past-sponsors/GitHub_Lockup_Black_Clearspace.png",
  },
  { id: 17, name: "Orkes", logo: "/assets/past-sponsors/orkes-seeklogo.png" },
  { id: 9, name: "Postman", logo: "/assets/past-sponsors/Postman-logo.png" },
  { id: 6, name: "MLH", logo: "/assets/past-sponsors/MLH-logo.svg" },
  { id: 35, name: "SSTC Black", logo: "/assets/past-sponsors/SSTCblack.svg" },
  { id: 28, name: "HackQuest", logo: "/assets/past-sponsors/Black_on_Transparent.png" },
  {
    id: 16,
    name: "GeeksforGeeks",
    logo: "/assets/past-sponsors/GeeksforGeeks 1.svg",
  },
  {
    id: 11,
    name: "Replit",
    logo: "/assets/past-sponsors/Replit-Dark-Background.png",
  },
  {
    id: 5,
    name: "Devfolio",
    logo: "/assets/past-sponsors/Devfolio_Logo-White.png",
  },
  { id: 12, name: "Solana", logo: "/assets/past-sponsors/Solana Dark.png" },
  { id: 13, name: "MongoDB", logo: "/assets/past-sponsors/mongoDB.svg" },
  {
    id: 14,
    name: "Filecoin",
    logo: "/assets/past-sponsors/Filecoin Coloured White Text-1.png",
  },
  {
    id: 8,
    name: "Polygon",
    logo: "/assets/past-sponsors/Polygon_Logo-White@2x.png",
  },

  // Mid Tier
  { id: 15, name: "GoDaddy", logo: "/assets/past-sponsors/goDaddy.svg" },
  {
    id: 19,
    name: "Streamlit",
    logo: "/assets/past-sponsors/streamlit-logo.svg",
  },
  { id: 20, name: "Bluelearn", logo: "/assets/past-sponsors/Bluelearn.svg" },
  { id: 31, name: "Quine", logo: "/assets/past-sponsors/Quine_Logo.svg" },
  { id: 22, name: "Echo3D", logo: "/assets/past-sponsors/Echo3D.png" },
  { id: 23, name: "Keploy", logo: "/assets/past-sponsors/keploy-logo.png" },
  { id: 24, name: "Taskade", logo: "/assets/past-sponsors/Taskade.png" },
  { id: 25, name: "TinyMCE", logo: "/assets/past-sponsors/tinymce.svg" },
  { id: 26, name: "VoiceFlow", logo: "/assets/past-sponsors/voiceFlowSvg.svg" },
  { id: 27, name: "VerbWire", logo: "/assets/past-sponsors/verbWire.svg" },
  { id: 29, name: "Axure", logo: "/assets/past-sponsors/Axure.png" },
  { id: 39, name: "XYZ", logo: "/assets/past-sponsors/XYZ.png" },
  {
    id: 40,
    name: "Rosenfeld",
    logo: "/assets/past-sponsors/Rosenfeld-logo.png",
  },
];

const Sponsors = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Title Component */}
      <div className="mb-10 sm:mb-16 md:mb-20">
        <Title title="Past Sponsors" />
      </div>

      <div
        className="bg-gradient-to-r from-[#1fbcd7]/10 via-[#feb449]/10 to-[#fe5c36]/10 z-10 w-full py-10 sm:py-16 md:py-20 border-y-2 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        style={{
          borderImage: "linear-gradient(to right, #1fbcd7, #feb449, #fe5c36) 1",
        }}
      >
        {/* Dynamic List of Sponsor Images structured as a Grid */}
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {sponsorsList.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative flex items-center justify-center p-[2px] rounded-lg md:rounded-xl bg-gradient-to-br from-[#1fbcd7]/40 via-[#feb449]/40 to-[#fe5c36]/40 hover:from-[#1fbcd7] hover:via-[#feb449] hover:to-[#fe5c36] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(254,180,73,0.4)] h-[70px] sm:h-[90px] md:h-[110px]"
            >
              <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[6px] md:rounded-[10px] flex items-center justify-center p-2 sm:p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
