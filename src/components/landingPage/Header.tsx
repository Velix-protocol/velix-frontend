import VelixLogo from "@/components/svg/VelixLogoGroup";
import VelixBlackLogo from "@/components/svg/VelixPrimaryLogoBlack";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeButton from "../ui/velix/ThemeButton";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useTheme } from "@/context/theme-provider";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import { VELIX_APP_ENVIRONMENT } from "@/utils/constant";
import { velixEnvironmentUrls } from "@/utils/config";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true,
  });

  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isDropdownOpened] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useBodyOverflow(isMenuOpen);

  const links = [
    { to: "https://docs.velix.io", text: "Docs" },
    {
      to: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf",
      text: "Audits",
    },
    { to: "/app/dashboard", text: "VePoints" },
  ];

  const drawerStyles = `fixed top-0 right-0 h-full w-full ${
    theme === "light" ? "bg-white text-black" : "bg-velix-primary text-white"
  } transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
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
            onClick={navigateToApp}
            className="hidden lg:block font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
          >
            Launch
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      <div className={drawerStyles}>
        <div className="flex justify-between items-center p-4 fixed top-0 right-0 w-full z-50 bg-inherit">
          <Link to="/">
            {theme === "light" ? (
              <VelixBlackLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem] text-black" />
            ) : (
              <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem] text-white" />
            )}
          </Link>
          <button className="text-current" onClick={() => setIsMenuOpen(false)}>
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4 flex-grow mt-16 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              target="_blank"
              className={`font-space-grotesk !font-normal relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[1px] ${
                theme === "light"
                  ? "after:bg-gradient-to-r after:from-neutral-300 after:to-transparent"
                  : "after:bg-neutral-800"
              }`}
            >
              {link.text}
            </Link>
          ))}
          <ThemeButton className="w-12 h-12 flex items-center justify-center" />
        </div>
        <div className="p-4 flex flex-col justify-end flex-grow">
          <div className="text-center text-xs text-neutral-500">
            © 2023 - 2024 Velix
          </div>
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
              onClick={navigateToApp}
              className="hidden lg:block font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
            >
              Launch
            </Button>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiMenu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
