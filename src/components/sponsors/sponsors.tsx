import React from 'react';
import Title from '../common/title';

// Dynamic list of sponsor images (using placeholders for now)
const sponsorsList = [
  { id: 1, name: 'Sponsor 1', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+1' },
  { id: 2, name: 'Sponsor 2', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+2' },
  { id: 3, name: 'Sponsor 3', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+3' },
  { id: 4, name: 'Sponsor 4', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+4' },
  { id: 5, name: 'Sponsor 5', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+5' },
  { id: 6, name: 'Sponsor 6', logo: 'https://via.placeholder.com/300x150/ffffff/000000?text=Sponsor+6' },
];

const Sponsors = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden">

      {/* Title Component */}
      <div className="mb-10 sm:mb-16 md:mb-20">
        <Title title="Sponsors" />
      </div>

      <div className="bg-[#e0f7fa]/80 z-10 w-full py-10 sm:py-16 md:py-20 border-y-2 border-[#4dd0e1]/80 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Dynamic List of Sponsor Images structured as a Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {sponsorsList.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-[#4dd0e1]/80 h-[120px] sm:h-[150px] md:h-[190px] transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 hover:border-[#26c6da] hover:shadow-[0_0_20px_rgba(77,208,225,0.3)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" 
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Sponsors;
