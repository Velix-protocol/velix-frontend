import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent } from "react";

interface InputWalletAddressProps {
  onClaim: () => void;
}

const InputWalletAddress: React.FC<InputWalletAddressProps> = ({ onClaim }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWalletAddress(event.target.value);
  };

  return (
    <div className="flex flex-col rounded-lg bg-white p-5 mt-12 w-full dark:bg-velix-claim-gray">
      <div className="flex bg-white dark:bg-velix-claim-gray2 rounded-lg flex-col sm:flex-row">
        <div className="flex-1">
          <div className="items-start xl:items-center mt-1">
            <input
              type="text"
              className="w-full h-11 p-2 bg-velix-claim dark:bg-velix-claim-gray2 rounded-md text-sm text-white focus:outline-none"
              placeholder="Paste your wallet address"
              value={walletAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Button
          onClick={onClaim} 
          className="lg:w-full w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
          disabled={!walletAddress} 
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export default InputWalletAddress;
