import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import useToggleBodyScroll from "@/hooks/useToggleBodyScroll.ts";
import { VELIX_APP_ENVIRONMENT } from "@/utils/constant.ts";
import { velixEnvironmentUrls } from "@/utils/config.ts";
import { SupportedChains } from "@/types/index.ts";
import { Button } from "../button";

type SwitchEcosystemDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  currentEcosystem: SupportedChains; 
  targetEcosystem: SupportedChains; 
};

export default function SwitchEcosystemDialog({
  isOpen,
  onClose,
  targetEcosystem
}: SwitchEcosystemDialogProps) {
  const navigate = useNavigate();

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useToggleBodyScroll(isOpen);

  const navigateToApp = (ecosystem: SupportedChains) => {
    const crosschainPath = "/crosschain"; 
    switch (VELIX_APP_ENVIRONMENT) {
      case "production":
        return (window.location.href = `${velixEnvironmentUrls.production.app}/${ecosystem}${crosschainPath}`);
      case "staging":
        return (window.location.href = `${velixEnvironmentUrls.staging.app}/${ecosystem}${crosschainPath}`);
      case "development":
      case "local":
      default:
        return navigate(`/app/${ecosystem}${crosschainPath}`);
    }
  };

  const handleNavigate = (ecosystem: SupportedChains) => {
    navigateToApp(ecosystem);
    onClose();
  };

  if (!isOpen) return null;

  const ecosystemLogo = targetEcosystem === "metis" ? "/svg/metis.svg" : "/svg/starknet.svg";
  const ecosystemName = targetEcosystem === "metis" ? "Metis" : "Starknet";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-velix-Ecosystem rounded-2xl shadow-lg p-10 w-80 h-auto lg:w-[37.5rem] lg:h-72 md:w-96 md:h-96 dark:bg-velix-form-input-dark ">
        <div className="flex items-center justify-between mb-[0.375rem]">
          <h1 className="xl:text-xl lg:text-lg md:text-md xl:mt-4 xl:mb-3 mb-3 font-bold font-space-grotesk text-start weight-700 text-velix-black dark:text-velix-dark-white sm:text-xs">
            Switch Ecosystem
          </h1>
          <HiOutlineX
            className="text-velix-claim dark:bg-velix-light-dark cursor-pointer p-1 rounded-full bg-velix-claim-grey dark:bg-velix-claim-gray2 hover:bg-gray-400 h-6 w-6 dark:text-velix-dark-white dark:hover:bg-velix-dark-hover lg:-mt-12 lg:-mr-1 md:-mt-10 md:-mr-5 -mt-12 -mr-3"
            onClick={onClose}
          />
        </div>
        <p className="text-xs sm:text-xs md:text-md lg:text-lg -mt-2 font-space-grotesk text-start text-velix-black mb-5 lg:mb-9 md:mb-9 dark:text-velix-dark-white">
          To claim the crosschain reward
        </p>
        <div className="space-y-[1.5rem]">
          <div
            className="w-full flex items-center disabled:opacity-50 disabled:cursor-not-allowed justify-between px-3 py-4 sm:px-3 sm:py-5 bg-velix-gray-100 rounded-lg transition dark:bg-velix-light-dark"
          >
            <div className="flex items-center space-x-2">
              <img src={ecosystemLogo} alt="ecosystemLogo" className="w-8 h-8"/>
              <h1 className="font-bold font-space-grotesk text-velix-black dark:text-velix-dark-white">
                {ecosystemName}
              </h1>
            </div>
            <Button 
              onClick={() => handleNavigate(targetEcosystem)} 
              className="text-white dark:text-black bg-velix-blue dark:bg-velix-claim">
              Switch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
