import { useInView } from "react-intersection-observer";
import { useState } from "react";
import useToggleBodyScroll from "@/hooks/useToggleBodyScroll";
import Navigation from "./Navigation";
import HeaderMini from "./HeaderMini";
import SideMenu from "./SideMenu";

export default function Header({ onLaunchApp }: { onLaunchApp: () => void }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useToggleBodyScroll(isMenuOpen);

  const links = [
    { to: "https://docs.velix.io", text: "Docs" },
    {
      to: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf",
      text: "Audits"
    },
    { to: "/app/metis/vepoints", text: "VePoints" }
  ];

  return (
    <div>
      <header ref={ref} className="z-50 relative">
        <Navigation
          onLaunchApp={onLaunchApp}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          links={links}
        />
      </header>
      <HeaderMini
        onLaunchApp={onLaunchApp}
        inView={inView}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        links={links}
      />

      <SideMenu isMenuOpen={isMenuOpen} links={links} />
    </div>
  );
}
