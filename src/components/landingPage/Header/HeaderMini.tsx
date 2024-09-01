import { Dispatch, SetStateAction } from "react";
import Navigation, { HeaderLink } from "./Navigation";

type HeaderMiniProps = {
  inView: boolean;
  links: HeaderLink;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  onLaunchApp: () => void;
};

export default function HeaderMini({
  inView,
  links,
  isMenuOpen,
  setIsMenuOpen,
  onLaunchApp
}: HeaderMiniProps) {
  return (
    <header
      className={`justify-between -top-full -translate-y-full fixed left-0 right-0 z-[999] items-center bg-velix-primary ${
        !inView ? "!top-0 !translate-y-0 transition-all duration-200" : ""
      }`}
    >
      <Navigation
        onLaunchApp={onLaunchApp}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        links={links}
      />
    </header>
  );
}
