import VelixLogo from "@/components/svg/VelixLogoGroup";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import Section from "@/components/layouts/Section";

export type HeaderLink = {
  to: string;
  text: string;
}[];

type NavigationProps = {
  links: HeaderLink;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  onLaunchApp: () => void;
};

export default function Navigation({
  links,
  isMenuOpen,
  onLaunchApp
}: NavigationProps) {
  return (
    <>
      <Section
        data-menuopened={isMenuOpen}
        className="!w-full bg-velix-primary data-[menuopened=true]:bg-white dark:data-[menuopened=true]:bg-velix-primary"
        containerClassName="flex justify-between items-center py-5 max-lg:p-5"
      >
        <Link to="/">
          <VelixLogo
            data-menuopened={isMenuOpen}
            className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem] fill-white data-[menuopened=true]:fill-velix-black dark:data-[menuopened=true]:fill-white"
          />
        </Link>
        <div className="flex items-center gap-3">
          <div className="relative px-2 hidden lg:flex">
            <div className="flex items-center gap-4 pb-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  target="_blank"
                  className="font-space-grotesk !font-normal text-white flex items-center hover:underline gap-1 relative after:absolute"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <Button
            onClick={onLaunchApp}
            className="hidden lg:block font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
          >
            Launch
          </Button>
          <button
            className="lg:hidden p-2"
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiOutlineX
                data-menuopened={isMenuOpen}
                className="w-6 h-6 text-white data-[menuopened=true]:text-velix-black dark:data-[menuopened=true]:text-white"
              />
            ) : (
              <HiMenu className="w-6 h-6 text-white " />
            )}
          </button>
        </div>
      </Section>
    </>
  );
}
