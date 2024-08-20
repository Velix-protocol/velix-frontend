import { HeaderLink } from "./Navigation";
import ThemeButton from "@/components/ui/velix/ThemeButton";
import { Link } from "react-router-dom";

type SideMenuProps = {
  links: HeaderLink;
  isMenuOpen: boolean;
};

export default function SideMenu({ isMenuOpen, links }: SideMenuProps) {
  return (
    <div
      data-menuopened={isMenuOpen}
      className="fixed lg:hidden top-16 right-0 bottom-0 h-screen w-full transition-transform duration-300 z-50 flex flex-col ease-in-out bg-white text-black dark:bg-velix-primary dark:text-white data-[menuopened=true]:translate-x-0 data-[menuopened=false]:translate-x-full"
    >
      <div className="flex flex-col flex-grow overflow-hidden scrollbar-hidden">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            target={link.external ? "_blank" : "_self"}
            className={`font-space-grotesk !font-normal relative p-7 after:absolute after:bottom-[-2px] after:left-[-1px] after:w-[calc(100%+2px)] after:h-[1px] ${
              link.text === "VePoints"
                ? "after:bg-transparent"
                : "after:bg-neutral-400 after:opacity-30 dark:after:bg-neutral-600"
            }`}
          >
            {link.text}
          </Link>
        ))}
        <ThemeButton className="w-12 h-12 flex items-center justify-center p-3 ml-4" />
      </div>
      <div className="flex flex-col justify-end flex-grow mb-20">
        <div className="font-space-grotesk !font-normal relative text-neutral-600 dark:text-neutral-300">
          <div className="absolute top-[-3.5rem] left-0 w-full h-[1px] bg-neutral-700 opacity-30 dark:bg-neutral-600 transition-opacity duration-300" />
          <div className="p-6 mt-[-3rem]">
            © 2023 - {new Date().getFullYear()} Velix
          </div>
        </div>
      </div>
    </div>
  );
}
