import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import useToggleBodyScroll from "@/hooks/useToggleBodyScroll.ts";
import UpArrow from "@/components/ui/velix/icons/UpArrow.tsx";
import { VELIX_APP_ENVIRONMENT } from "@/utils/constant.ts";
import { velixEnvironmentUrls } from "@/utils/config.ts";
import { SupportedChains } from "@/types/index.ts";

type ChooseEcosystemDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ChooseEcosystemDialog({
  isOpen,
  onClose
}: ChooseEcosystemDialogProps) {
  const navigate = useNavigate();
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useToggleBodyScroll(isOpen);

  const navigateToApp = (ecosystem: SupportedChains) => {
    switch (VELIX_APP_ENVIRONMENT) {
      case "production":
        return (window.location.href = `${velixEnvironmentUrls.production.app}/${ecosystem}/stake`);
      case "staging":
        return (window.location.href = `${velixEnvironmentUrls.staging.app}/${ecosystem}/stake`);
      case "development":
      case "local":
      default:
        return navigate(`/app/${ecosystem}/stake`);
    }
  };

  const handleNavigate = (ecosystem: SupportedChains) => {
    navigateToApp(ecosystem);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-velix-Ecosystem rounded-custom-sm lg:rounded-custom-lg shadow-lg p-10 w-80 h-auto lg:w-[37.5rem] lg:h-96 md:w-96 md:h-96 md:rounded-custom-md dark:bg-velix-form-input-dark ">
        <div className="flex items-center justify-between mb-[0.375rem]">
          <h1 className="text-xl -mt-3 font-bold font-space-grotesk text-start weight-700 text-velix-black dark:text-velix-dark-white">
            Choose Ecosystem
          </h1>
          <HiOutlineX
            className="text-velix-black cursor-pointer p-1 rounded-md hover:bg-velix-gray-200 h-6 w-6 dark:text-velix-dark-white dark:hover:bg-velix-dark-hover lg:-mt-5 lg:-mr-3 md:-mt-10 md:-mr-5 -mt-12 -mr-6"
            onClick={onClose}
          />
        </div>
        <p className="sm:text-sm md:text-md lg:text-lg -mt-2 font-space-grotesk text-start text-velix-black mb-5 lg:mb-9 md:mb-9 dark:text-velix-dark-white">
          Where would you like to stake?
        </p>
        <div className="space-y-[1.5rem]">
          <button
            onClick={() => handleNavigate("metis")}
            className="w-full flex items-center justify-between px-3 py-4 sm:px-3 sm:py-5 bg-velix-gray-100 hover:bg-velix-gray-200 rounded-lg transition dark:bg-velix-light-dark dark:hover:bg-velix-dark-hover"
          >
            <div className="flex items-center space-x-2">
              <img src="/svg/metis.svg" alt="metis arrow" />
              <h1 className="font-bold font-space-grotesk text-velix-black dark:text-velix-dark-white">
                Metis
              </h1>
            </div>
            <UpArrow />
          </button>
          <button
            onClick={() => handleNavigate("starknet")}
            className="w-full flex items-center justify-between px-3 py-4 sm:px-3 sm:py-5 bg-velix-gray-100 hover:bg-velix-gray-200 rounded-lg transition dark:bg-velix-light-dark dark:hover:bg-velix-dark-hover"
          >
            <div className="flex items-center space-x-[0.5rem]">
              <img src="/svg/starknet.svg" alt="starknet icon" />
              <h1 className="font-bold font-space-grotesk text-velix-black dark:text-velix-dark-white">
                Starknet
              </h1>
            </div>
            <UpArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
