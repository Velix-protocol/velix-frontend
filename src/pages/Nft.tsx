import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import SuperNft from "@/components/svg/superNft.svg?react";
import { Check } from "lucide-react";
import { cn } from "@/utils/utils";
import { useCallback, useLayoutEffect, useState } from "react";
import { retreiveActionsActivity, retreiveClaims } from "@/utils/supabase";
import { useAccount } from "wagmi";
import WaitingModal from "@/components/WaitingForApprovalModal";
import Modal from "@/components/ui/velix/Modal";
import SuccessModal from "@/components/SuccessModal";
import { useMintNft } from "@/hooks/use-contract";
import { EXPLORER_TX_URL } from "@/utils/constant";

function Requirement({
  title,
  isFullfilled
}: {
  title: string;
  isFullfilled: boolean;
}) {
  return (
    <p className="flex items-center gap-2">
      <span
        className={`dark:text-velix-primary rounded-full p-0.5 ${
          isFullfilled ? "bg-green-500" : "bg-white dark:bg-velix-dark-white/25"
        }`}
      >
        <Check className={cn("w-4 h-4")} />
      </span>
      <p className="text-white">{title}</p>
    </p>
  );
}

export default function Nft() {
  const [hasMinted, setHasMinted] = useState(false);
  const [hasStaked, setHasStaked] = useState(false);
  const [hasUnstaked, setHasUnstaked] = useState(false);
  const [hasClaimed, setHasClaimed] = useState<boolean | null>(null);
  const { address } = useAccount();
  const { isPending, isSuccess, reset, txhash, mintNft } = useMintNft();

  const checkForUserClaimingPermissions = useCallback(async () => {
    if (!address) return;
    const { data: mints } = await retreiveActionsActivity("mint", address);
    const { data: stakes } = await retreiveActionsActivity("stake", address);
    const { data: unstakes } = await retreiveActionsActivity(
      "unstake",
      address
    );
    const { data: claims } = await retreiveClaims(address);

    setHasMinted(mints ? mints?.length >= 1 : false);
    setHasStaked(stakes ? stakes?.length >= 1 : false);
    setHasUnstaked(unstakes ? unstakes?.length >= 1 : false);
    setHasClaimed(claims ? claims.length >= 1 : false);
  }, [address]);

  useLayoutEffect(() => {
    void checkForUserClaimingPermissions();
  }, [checkForUserClaimingPermissions]);

  const onViewTransaction = () => {
    window.open(`${EXPLORER_TX_URL}${txhash}`);
  };

  const onCloseModal = async () => {
    if (!address) return;
    const { data: claims } = await retreiveClaims(address);
    setHasClaimed(claims ? claims?.length >= 1 : false);
    reset();
  };

  return (
    <>
      {isPending && <WaitingModal title="Minting..." subTitle="" />}
      {isSuccess && (
        <Modal onClose={onCloseModal}>
          <SuccessModal
            onViewOnExploer={onViewTransaction}
            onClose={onCloseModal}
          />
        </Modal>
      )}
      <Section>
        <div className="mt-40 mb-10 max-lg:mb-32 bg-velix-blue max-lg:mx-5 dark:bg-velix-black flex justify-between max-lg:flex max-lg:flex-col-reverse items-center p-24 max-lg:p-5 rounded-xl">
          <div className="font-space-grotesk">
            <h2 className="font-bold  max-lg:text-2xl max-lg:mt-10 max-lg:text-center text-4xl text-white dark:text-velix-dark-white">
              Velix superstar NFT claim
            </h2>
            <p className="text-white dark:text-velix-dark-white mt-4">
              Complete the steps below
            </p>
            <div className="mt-10 flex flex-col gap-5">
              <Requirement
                title="Submit Metis to mint VeMetis"
                isFullfilled={hasMinted}
              />
              <Requirement
                title="Stake VeMetis to get sveMetis"
                isFullfilled={hasStaked}
              />
              <Requirement
                title="Unstake sveMetis to get VeMetis"
                isFullfilled={hasUnstaked}
              />
              <Requirement
                title="Claim your reward"
                isFullfilled={hasClaimed ?? isSuccess}
              />
            </div>
            <Button
              onClick={mintNft}
              disabled={hasClaimed === null || hasClaimed}
              className="bg-velix-yellow hover:bg-velix-yellow mt-10 px-20"
            >
              Claim now
            </Button>
          </div>
          <SuperNft className="max-lg:!w-40 max-lg:!h-40" />
        </div>
      </Section>
    </>
  );
}
