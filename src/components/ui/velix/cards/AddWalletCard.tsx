import { Button } from "../../button";
import AddWallet from "../icons/AddWallet";
import { useNavigate } from "react-router-dom"; 

export default function AddWalletCard() {
  const navigate = useNavigate(); 

  const handleAddWalletClick = () => {
    navigate('/app/crosschain'); 
  };

  return (
    <div className="flex bg-velix-claim dark:bg-velix-claim-gray2 border border-velix-claim-red p-3 rounded-lg flex-row w-full h-fit">
      <AddWallet className="items-center mt-2 ml-1" />
      <Button 
        onClick={handleAddWalletClick} 
        className="w-auto h-auto font-space-grotesk bg-velix-claim-red text-white ml-auto py-1"
      >
        Add Wallet
      </Button>
    </div>
  );
}
