import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useToggleBodyScroll from "@/hooks/useToggleBodyScroll";
import { VELIX_APP_ENVIRONMENT } from "@/utils/constant";
import { velixEnvironmentUrls } from "@/utils/config";
import Navigation from "./Navigation";
import HeaderMini from "./HeaderMini";
import SideMenu from "./SideMenu";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true
  });

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useToggleBodyScroll(isMenuOpen);

  const links = [
    { to: "https://docs.velix.io", text: "Docs" },
    {
      to: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf",
      text: "Audits"
    },
    { to: "/app/vepoints", text: "VePoints" }
  ];

  const navigateToApp = () => {
    switch (VELIX_APP_ENVIRONMENT) {
      case "production":
        return (window.location.href = velixEnvironmentUrls.production.app);
      case "staging":
        return (window.location.href = velixEnvironmentUrls.staging.app);
      case "development":
      case "local":
      default:
        return navigate("/app/mint");
    }
  };

  return (
    <div>
      <header ref={ref} className="z-50 relative">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          links={links}
        />
      </header>
      <HeaderMini
        inView={inView}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToApp={navigateToApp}
        links={links}
      />

      <SideMenu isMenuOpen={isMenuOpen} links={links} />
    </div>
  );
}
