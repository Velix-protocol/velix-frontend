import { Button } from "../../button";
import AddWallet from "../icons/AddWallet";
import { useNavigate } from "react-router-dom"; 

export default function AddWalletCard() {
  const navigate = useNavigate(); 

  const handleAddWalletClick = () => {
    navigate('/app/crosschain'); 
  };

  return (
    <div className="flex border border-velix-claim-red p-3 rounded-lg flex-row w-full h-fit">
      <AddWallet className="items-center mt-2 w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0" />
      <p className="ml-2 text-velix-claim-red text-xs lg:text-base font-space-grotesk lg:mt-1 mt-2 sm:w-3/4 truncate">
        Add your wallet address for Genesis pool stakes share a 20% protocol revenue for Velix.
      </p>      
      <Button 
        onClick={handleAddWalletClick} 
        className="w-auto h-auto font-space-grotesk bg-velix-claim-red text-white ml-auto py-1"
      >
        Add Wallet
      </Button>
    </div>
  );
}
