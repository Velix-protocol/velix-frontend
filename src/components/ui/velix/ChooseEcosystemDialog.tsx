import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

type ChooseEcosystemDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConnectToWalletClick: () => void;
};

const ChooseEcosystemDialog: React.FC<ChooseEcosystemDialogProps> = function({ isOpen, onClose, onConnectToWalletClick }) {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-velix-Ecosystem rounded-[24px] lg:rounded-[80px] shadow-lg p-10 w-80 h-auto lg:w-[600px] lg:h-[400px] md:w-[400px] md:h-[400px] md:rounded-[36px]">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold font-space-grotesk text-start weight-700 text-velix-black">Choose Ecosystem</h1>
          <HiOutlineX className="text-velix-black cursor-pointer p-1 rounded-md hover:bg-velix-gray h-6 w-6" onClick={onClose} />
        </div>
        <p className="font-space-grotesk text-start text-velix-black mb-5 lg:mb-10 md:mb-10">Where would you like to stake?</p>
        <div className="space-y-6">
          <button 
            onClick={onConnectToWalletClick}
            className="w-full flex items-center justify-between px-3 py-4 sm:px-3 sm:py-5 bg-velix-gray-100 hover:bg-velix-gray-200 rounded-lg transition">
            <div className="flex items-center space-x-2">
              <img src="/svg/metis.svg" alt=" metis arrow" />
              <h1 className="font-bold font-space-grotesk text-velix-black">Metis</h1>
            </div>
            <img src="/svg/upArrow.svg" alt="" />
          </button>
          <button 
            className="w-full flex items-center justify-between px-3 py-4 sm:px-3 sm:py-5 bg-velix-gray-100 hover:bg-velix-gray-200 rounded-lg transition">
             <div className="flex items-center space-x-2">   
                <img src="/svg/starknet.svg" alt="starknet icon" />
                <h1 className='font-bold font-space-grotesk text-velix-black'>Starknet</h1>
            </div>
            <img src="/svg/upArrow.svg" alt="starknet arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseEcosystemDialog;




