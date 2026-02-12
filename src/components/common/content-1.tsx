import React from "react";
import Title from "./title";

const Content1 = ({title, preTitle, content}: {title: string, preTitle: string, content: string}) => {
  return (
    <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center p-8  overflow-hidden">
      <div className="z-10 flex flex-col items-center gap-10 text-center max-w-6xl mx-auto">
        <Title title={title} preTitle={preTitle}/>
        <p className="font-poppins text-sm md:text-base lg:text-base text-gray-700 font-light leading-relaxed max-w-8xl">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Content1;
