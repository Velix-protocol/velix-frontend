import VelixLogo from "@/components/svg/VelixLogoGroup";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeButton from "../ui/velix/ThemeButton";
import { HiMiniChevronDown } from "react-icons/hi2";
import { useState } from "react";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true
  });

  const navigate = useNavigate();
  const [isDropdownOpened, setIsDropDownOpened] = useState(false);

  return (
    <div>
      <header
        ref={ref}
        className="flex justify-between items-center py-5 lg:py-14 z-50"
      >
        <Link to="/">
          <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem]" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="relative px-2">
            <div
              data-dropdownopened={isDropdownOpened}
              className="flex items-center gap-4 pb-2"
            >
              <Link
                to="https://docs.velix.io"
                target="_blank"
                className="font-space-grotesk !font-normal text-white flex items-center underline gap-1"
              >
                Docs
              </Link>
              <HiMiniChevronDown
                className={`w-4 h-4  transition-all text-white cursor-pointer ${isDropdownOpened ? "rotate-0" : "rotate-180"}`}
                onClick={() => setIsDropDownOpened((prev) => !prev)}
              />
            </div>

            {isDropdownOpened && (
              <Link
                to="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf"
                target="_blank"
                className="font-space-grotesk !font-normal absolute text-white  underline flex items-center gap-1 pt-2"
              >
                Audit
              </Link>
            )}
          </div>
          <Button
            onClick={() => {
              return navigate("/app/mint");
            }}
            className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
          >
            Launch
          </Button>
          {/* <ThemeButton className="hidden max-lg:block" /> */}
        </div>
      </header>

      <header
        className={`px-5 justify-between -top-full -translate-y-full fixed left-0 right-0 z-[999] items-center pt-5 pb-14 bg-velix-primary ${
          !inView ? "!top-0 !translate-y-0 transition-all duration-200" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-5xl xl:max-w-7xl mx-auto relative">
          <Link to="/">
            <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem]" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative px-2">
              <div
                data-dropdownopened={isDropdownOpened}
                className="flex items-center gap-4 pb-2"
              >
                <Link
                  to="https://docs.velix.io"
                  target="_blank"
                  className="font-space-grotesk !font-normal text-white flex items-center underline gap-1"
                >
                  Docs
                </Link>
                <HiMiniChevronDown
                  className={`w-4 h-4 transition-all text-white cursor-pointer ${isDropdownOpened ? "rotate-0" : "rotate-180"}`}
                  onClick={() => setIsDropDownOpened((prev) => !prev)}
                />
              </div>

              {isDropdownOpened && (
                <Link
                  to="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf"
                  target="_blank"
                  className="font-space-grotesk !font-normal absolute text-white  underline flex items-center gap-1 pt-2"
                >
                  Audit
                </Link>
              )}
            </div>
            <Button
              onClick={() => {
                return navigate("/app/mint");
              }}
              className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
            >
              Launch
            </Button>
            <ThemeButton className="hidden max-lg:block" />
          </div>
        </div>
      </header>
    </div>
  );
}
