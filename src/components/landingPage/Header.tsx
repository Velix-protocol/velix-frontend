import VelixLogo from "@/components/svg/VelixLogoGroup";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeButton from "../ui/velix/ThemeButton";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useTheme } from "@/context/theme-provider";
import { VELIX_APP_ENVIRONMENT } from "@/utils/constant";
import { velixEnvironmentUrls } from "@/utils/config";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true
  });

  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isDropdownOpened] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "https://docs.velix.io", text: "Docs" },
    {
      to: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf",
      text: "Audits"
    },
    { to: "/dashboard", text: "VePoints" }
  ];

  const drawerStyles = `fixed top-0 left-0 h-full w-full ${
    theme === "light" ? "bg-white text-black" : "bg-velix-primary text-white"
  } transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  } z-50 flex flex-col justify-between`;

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
      <header
        ref={ref}
        className="flex justify-between items-center py-5 lg:py-14 z-50 relative"
      >
        <Link to="/">
          <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem]" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="relative px-2 hidden lg:flex">
            <div
              data-dropdownopened={isDropdownOpened}
              className="flex items-center gap-4 pb-2"
            >
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

            {isDropdownOpened && (
              <Link
                to="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf"
                target="_blank"
                className="font-space-grotesk !font-normal absolute text-white underline flex items-center gap-1 pt-2"
              >
                Audit
              </Link>
            )}
          </div>
          <Button
            onClick={() => navigateToApp()}
            className="hidden lg:block font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
          >
            Launch
          </Button>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <HiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      <div className={drawerStyles}>
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem] text-white" />
          </Link>
          <button className="text-current" onClick={() => setIsMenuOpen(false)}>
            <HiOutlineX className="w-6 h-6 transform rotate-180" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4 flex-grow">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              target="_blank"
              className="font-space-grotesk !font-normal relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[1px] after:bg-neutral-800"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="p-4 flex flex-row justify-center">
          <ThemeButton className="items-center" />
        </div>
      </div>

      <header
        className={`px-5 justify-between -top-full -translate-y-full fixed left-0 right-0 z-[999] items-center py-5 bg-velix-primary ${
          !inView ? "!top-0 !translate-y-0 transition-all duration-200" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-5xl xl:max-w-7xl mx-auto relative">
          <Link to="/">
            <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem] text-white" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative px-2 hidden lg:flex">
              <div
                data-dropdownopened={isDropdownOpened}
                className="flex items-center gap-4 pb-2"
              >
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

              {isDropdownOpened && (
                <Link
                  to="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf"
                  target="_blank"
                  className="font-space-grotesk !font-normal absolute text-white underline flex items-center gap-1 pt-2"
                >
                  Audit
                </Link>
              )}
            </div>
            <Button
              onClick={() => navigateToApp()}
              className="hidden lg:block font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
            >
              Launch
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
