import { Button } from "../../button";
import AddWallet from "../icons/AddWallet";
import { useNavigate } from "react-router-dom"; 

export default function AddWalletCard() {
  const navigate = useNavigate(); 

  const handleAddWalletClick = () => {
    navigate('/app/crosschain'); 
  };

  return (
    <div className="pt-32">
      <div className="border border-velix-claim-red p-3 rounded-lg w-full h-fit flex items-center">         
        <AddWallet className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0 ml-2" /> 
        <p className="text-velix-claim-red text-xs -mt-1 lg:text-base font-space-grotesk sm:w-3/4 flex-grow-1 px-2"> 
          Add your wallet address for Genesis pool stakes share a 20% protocol revenue for Velix.
        </p>      
        
        <Button 
          onClick={handleAddWalletClick} 
          className="font-space-grotesk bg-velix-claim-red text-white lg:px-4 px-1 lg:text-base text-xs ml-auto sm:text-xs">
          Add Wallet
        </Button>
      </div>
    </div>
  );
}
