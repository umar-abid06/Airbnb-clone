import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="text-2xl mt-3">{title}</h2>
    </div>
  );
};

export default MediumCard;
