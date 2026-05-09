import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex-1 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0b0716]">
      <div className="relative h-60 w-full overflow-hidden bg-[#0b0716]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain object-left-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="relative px-4 pb-4 pt-1">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
