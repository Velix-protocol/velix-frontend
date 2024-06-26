import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface CardProps {
  title: string;
  iconSrc: string;
  link: string;
}

const AuditCard: React.FC<CardProps> = ({ title, iconSrc, link }) => {
  return (
    <div className="w-full flex font-space-grotesk flex-col justify-between h-[360px] rounded overflow-hidden dark:border dark:bg-black dark:border-white/20 bg-velix-slate-blue m-4">
      <div className="px-6 py-10 flex justify-center items-center h-4/6`">
        <img
          src={iconSrc}
          alt={title}
          width={iconSrc === "./book.svg" ? 220 : 140}
          height={100}
        />
      </div>
      <div className="flex justify-between px-6 py-4 bg-velix-primary text-white text-center rounded-b-lg ">
        <span className="">{title}</span>
        <a href={link} target="_blank">
          <FaLongArrowAltRight className="hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
export default AuditCard;
