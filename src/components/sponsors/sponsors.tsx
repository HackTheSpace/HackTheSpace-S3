import React from "react";
import Title from "../common/title";

// Dynamic list of sponsor images
const sponsorsList = [
  // Top Tier
  { id: 1, name: "AWS", logo: "/assets/past-sponsors/aws.png" },  
  { id: 4, name: "GitHub Black", logo: "/assets/past-sponsors/GitHub_Lockup_Black_Clearspace.png" },
  { id: 5, name: "Devfolio", logo: "/assets/past-sponsors/Devfolio_Logo-White.png" },
  { id: 6, name: "MLH", logo: "/assets/past-sponsors/MLH-logo.svg" },
  { id: 8, name: "Polygon", logo: "/assets/past-sponsors/Polygon_Logo-White@2x.png" },
  { id: 9, name: "Postman", logo: "/assets/past-sponsors/Postman-logo.png" },
  { id: 11, name: "Replit", logo: "/assets/past-sponsors/Replit-Dark-Background.png" },
  { id: 12, name: "Solana", logo: "/assets/past-sponsors/Solana Dark.png" },
  { id: 13, name: "MongoDB", logo: "/assets/past-sponsors/mongoDB.svg" },
  { id: 14, name: "Filecoin", logo: "/assets/past-sponsors/Filecoin Coloured White Text-1.png" },

  // Mid Tier
  { id: 15, name: "GoDaddy", logo: "/assets/past-sponsors/goDaddy.svg" },
  { id: 16, name: "GeeksforGeeks", logo: "/assets/past-sponsors/GeeksforGeeks 1.svg" },
  { id: 17, name: "Orkes", logo: "/assets/past-sponsors/orkes-seeklogo.png" },
  { id: 19, name: "Streamlit", logo: "/assets/past-sponsors/streamlit-logo.svg" },
  { id: 20, name: "Bluelearn", logo: "/assets/past-sponsors/Bluelearn.svg" },
  { id: 22, name: "Echo3D", logo: "/assets/past-sponsors/Echo3D.png" },
  { id: 23, name: "Keploy", logo: "/assets/past-sponsors/keploy-logo.png" },
  { id: 24, name: "Taskade", logo: "/assets/past-sponsors/Taskade.png" },
  { id: 25, name: "TinyMCE", logo: "/assets/past-sponsors/tinymce.svg" },
  { id: 26, name: "VoiceFlow", logo: "/assets/past-sponsors/voiceFlowSvg.svg" },
  { id: 27, name: "VerbWire", logo: "/assets/past-sponsors/verbWire.svg" },
  { id: 28, name: "HackQuest", logo: "/assets/past-sponsors/hackquest.png" },
  { id: 29, name: "Axure", logo: "/assets/past-sponsors/Axure.png" },
  { id: 31, name: "Quine", logo: "/assets/past-sponsors/Quine_Logo.svg" },
  { id: 35, name: "SSTC Black", logo: "/assets/past-sponsors/SSTCblack.svg" },
  { id: 37, name: "Diamante", logo: "/assets/past-sponsors/diamante.png" },
  { id: 38, name: "Shutter Stories", logo: "/assets/past-sponsors/shutter_stories.png" },
  { id: 39, name: "XYZ", logo: "/assets/past-sponsors/XYZ.png" },
  { id: 40, name: "Rosenfeld", logo: "/assets/past-sponsors/Rosenfeld-logo.png" },
];

const Sponsors = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Title Component */}
      <div className="mb-10 sm:mb-16 md:mb-20">
        <Title title="Past Sponsors" />
      </div>

      <div className="bg-[#e0f7fa]/80 z-10 w-full py-10 sm:py-16 md:py-20 border-y-2 border-[#4dd0e1]/80 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Dynamic List of Sponsor Images structured as a Grid */}
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {sponsorsList.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#4dd0e1]/38 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-[#4dd0e1]/80 h-[120px] sm:h-[150px] md:h-[190px] transition-all duration-300 hover:scale-[1.02] hover:bg-[#4dd0e1]/60 hover:border-[#26c6da] hover:shadow-[0_0_20px_rgba(77,208,225,0.3)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
