import React from "react";
import Image from "next/image";

type Props = {
  color?: string;
  title: string;
  image: string;
  alt: string;
  variant?: "small" | "large";
  className?: string;
};

const SponsorCard = ({
  color,
  title,
  image,
  alt,
  variant,
  className = "",
}: Props) => {
  const containerStyle = color
    ? {
        borderColor: color,
        backgroundColor: `${color}1A`, // 10% opacity
      }
    : {};

  const titleStyle = color
    ? {
        backgroundColor: `${color}4D`, // 30% opacity
      }
    : {};

  const defaultContainerClass = color
    ? "flex flex-col items-center justify-center rounded-3xl border-[1.5px] p-3 backdrop-blur-[1px]"
    : "flex flex-col items-center justify-center rounded-3xl border-red-500 border-[1.5px] p-3 bg-red-800/10 backdrop-blur-[1px]";

  const defaultTitleClass = color
    ? "h-12 w-full rounded-md text-center flex items-center font-qurova justify-center text-sm text-black"
    : "h-12 w-full rounded-md bg-red-300 text-center flex items-center font-qurova justify-center text-sm text-black";

  return (
    <div
      className={`${defaultContainerClass} ${
        variant === "small" ? "h-40 w-50" : "h-65 w-50"
      } ${className}`}
      style={containerStyle}
    >
      <div className="flex-1 flex justify-center items-center">
        <Image src={image} alt={alt} width={80} height={80} />
      </div>
      <div className={defaultTitleClass} style={titleStyle}>
        {title}
      </div>
    </div>
  );
};

export default SponsorCard;
