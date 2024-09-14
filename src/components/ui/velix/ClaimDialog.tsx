import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import PrimeOne from './icons/PrimeOne';
import ClaimButton from './ClaimButton';
import PrimeTwo from './icons/PrimeTwo';
import PrimeFour from './icons/PrimeFour';
import PrimeThree from './icons/PrimeThree';

type ClaimDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ClaimDialog: React.FC<ClaimDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-70 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-72 sm:w-80 h-[70%] sm:h-3/4 lg:w-[40rem] md:w-[30rem] dark:bg-velix-claim-gray lg:rounded-custom-lg md:rounded-custom-md sm:rounded-custom-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="md:mt-2 text-lg sm:text-xl font-bold font-space-grotesk text-start text-gray-800 dark:text-white">
            Percentages to know
          </h1>
          <HiOutlineX
            className="text-text-velix-text-gray cursor-pointer p-1 rounded-md hover:bg-gray-200 h-5 sm:h-6 w-5 sm:w-6 dark:text-white dark:hover:bg- dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3"
            onClick={onClose}
          />
        </div>
        <p className="mb-6 sm:mb-10 font-space-grotesk text-sm sm:text-md text-velix-text-gray dark:text-gray-300">
          Be aware of the fees to be cut.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <label className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <small className="flex items-center justify-center rounded-full border border-green-500 dark:border-white dark:text-white text-green-500 px-2 py-1 font-space-grotesk text-xs sm:text-sm">
                <PrimeOne />
                100%
              </small>
              <h1 className="font-space-grotesk text-sm sm:text-md text-text-velix-text-gray dark:text-white">
                If you redeem in <span className="font-bold">90 days</span>
              </h1>
            </div>
            <ClaimButton label="Claim" />
          </label>

          <label className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <small className="flex items-center justify-center rounded-full border border-blue-500 text-blue-500 px-2 py-1 dark:border-white dark:text-white font-space-grotesk text-xs sm:text-sm">
                <PrimeTwo />
                -50%
              </small>
              <h1 className="font-space-grotesk text-sm sm:text-md text-text-velix-text-gray dark:text-white">
                If you redeem in <span className="font-bold">30 days</span>
              </h1>
            </div>
            <ClaimButton label="Claim" />
          </label>

          <label className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <small className="flex items-center justify-center rounded-full border border-gray-400 text-gray-400 dark:border-white dark:text-white px-2 py-1 font-space-grotesk text-xs sm:text-sm">
                <PrimeThree />
                -25%
              </small>
              <h1 className="font-space-grotesk text-sm sm:text-md text-text-velix-text-gray dark:text-white">
                If you redeem in <span className="font-bold">60 days</span>
              </h1>
            </div>
            <ClaimButton label="Claim" />
          </label>

          <label className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <small className="flex items-center justify-center rounded-full border border-red-500 text-red-500 dark:border-white dark:text-white px-2 py-1 font-space-grotesk text-xs sm:text-sm">
                <PrimeFour />
                -12%
              </small>
              <h1 className="font-space-grotesk text-sm sm:text-md text-text-velix-text-gray dark:text-white">
                If you redeem in the last <span className="font-bold">30 days</span>
              </h1>
            </div>
            <ClaimButton label="Claim" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClaimDialog;
