import NavigationMenus from "@/components/app/NavigationMenus";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import Number from "@/components/ui/velix/icons/404";
import Dark404 from "@/components/ui/velix/icons/Dark404";
import VelixPrimaryBlackLogo from "@/components/ui/velix/icons/VelixPrimaryBlackLogo";
import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useSupportedChain } from "@/context/SupportedChainsProvider";
import { isInArgentMobileAppBrowser } from "starknetkit/argentMobile";
import { isInBraavosMobileAppBrowser } from "starknetkit/braavosMobile";
import { isApp } from "@/utils/utils";

export default function Notfound({ isNested = false }: { isNested?: boolean }) {
  const navigate = useNavigate();
  const chain = useSupportedChain();

  useLayoutEffect(() => {
    if (window.location.pathname === "/" && isApp()) {
      if (isInArgentMobileAppBrowser() || isInBraavosMobileAppBrowser()) {
        window.location.href = `/starknet/stake`;
        return;
      }
      window.location.href = `/${chain}/stake`;
    }
  }, [chain]);

  if (window.location.pathname === "/") return <></>;
  return (
    <Section className="px-5 fixed top-0 left-0 right-0 h-screen bg-[#F5F7FF] dark:bg-velix-page-dark">
      {!isNested && (
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center justify-betwee space-x-32 text-base">
            <Link to="/">
              <VelixPrimaryBlackLogo className="fill-velix-black dark:fill-white w-[4.25rem] h-4" />
            </Link>
            <div className="hidden lg:block">
              <NavigationMenus isNotFound />
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col items-center h-screen w-fit mt-28 mx-auto">
        <Number className="max-md:w-60 max-md:h-60 w-96 h-96 mx-auto left-0 right-0 dark:hidden" />
        <Dark404 className="max-md:w-60 hidden dark:block max-md:h-60 w-96 h-96 mx-auto left-0 right-0" />
        <h2 className="text-2xl md:text-4xl dark:text-white text-center text-velix-primary font-bold font-space-grotesk mb-5 md:mb-10">
          Page not found
        </h2>
        <Button
          onClick={() => navigate("/", { replace: true })}
          className="flex bg-velix-primary text-white dark:bg-white dark:text-velix-primary hover:bg-velix-primary font-space-grotesk px-8 font-bold text-center items-center"
        >
          Go to home
        </Button>
      </div>
    </Section>
  );
}
