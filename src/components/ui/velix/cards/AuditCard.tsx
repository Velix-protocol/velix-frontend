import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import GradientBorder from "../GradientBorder";

interface CardProps {
  title: string;
  iconSrc: string;
  link: string;
}

const AuditCard: React.FC<CardProps> = ({ title, iconSrc, link }) => {
  return (
    <div className="relative p-0.25 w-full">
      <GradientBorder className="rounded-[0.9375rem] z-0 via-white/35" />
      <div className="w-full flex font-space-grotesk flex-col justify-between h-[360px] dark:bg-gradient-to-r to-[#313131] from-[#1D1D1D] rounded-[0.9375rem] overflow-hidden relative bg-velix-slate-blue">
        <div className="flex justify-center items-center h-4/6">
          <img
            src={iconSrc}
            alt={title}
            width={iconSrc === "./book.svg" ? 220 : 140}
            height={100}
            className="p-2 mt-4"
          />
        </div>
        <div className="flex justify-between p-6 bg-velix-primary dark:bg-[#2E2E2E] text-white text-center rounded-b-lg ">
          <span className="">{title}</span>
          <a href={link} target="_blank">
            <FaLongArrowAltRight className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AuditCard;
