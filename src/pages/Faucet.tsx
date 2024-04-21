import SuccessModal from "@/components/SuccessModal";
import WaitingModal from "@/components/WaitingForApprovalModal";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/velix/Modal";
import FaucetImage from "@/components/ui/velix/icons/FaucetImage";
import { useFaucet } from "@/hooks/use-contract";
import { EXPLORER_TX_URL } from "@/utils/constant";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useCallback, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import dayjs from "dayjs";

export default function Faucet() {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const navigate = useNavigate();
  const { claim, isPending, isSuccess, txhash, reset } = useFaucet();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const [isAllowedToClaim, setIsAllowedToClaim] = useState(true);

  useLayoutEffect(() => {
    if (!isMobile) return;
    window.location.pathname = "/app/mint";
  }, [isMobile, navigate]);

  const checkIsAllowedToClaim = useCallback(() => {
    const now = dayjs();
    const date = localStorage.getItem("velix-allowed-to-claim-after");

    if (date) {
      const diff = dayjs(JSON.parse(date)).diff(now, "day");
      setIsAllowedToClaim(diff > 1);
    }
  }, []);

  useLayoutEffect(() => {
    checkIsAllowedToClaim();
  }, [checkIsAllowedToClaim, isAllowedToClaim]);

  const onViewTransaction = async () => {
    window.open(`${EXPLORER_TX_URL}${txhash}`);
  };

  const onClaim = async () => {
    const now = dayjs();
    const saveNewDate = () => {
      const lockedFor = now.add(1, "day");
      localStorage.setItem(
        "velix-allowed-to-claim-after",
        JSON.stringify(lockedFor)
      );
    };

    const date = localStorage.getItem("velix-allowed-to-claim-after");
    if (date && dayjs(JSON.parse(date)).diff(now, "day") === 1) return;

    if (isConnected) {
      await claim();
      saveNewDate();
      setIsAllowedToClaim(false);
      return;
    }

    open();
  };

  return (
    <>
      {isPending && <WaitingModal title="Claiming is in process" subTitle="" />}
      {isSuccess && (
        <Modal onClose={reset}>
          <SuccessModal onViewOnExploer={onViewTransaction} onClose={reset} />
        </Modal>
      )}
      <Section>
        <div className="my-40 bg-velix-blue dark:bg-velix-black flex justify-between items-center p-24 rounded-xl">
          <div className="font-space-grotesk">
            <h2 className="font-bold text-6xl text-white dark:text-velix-dark-white">
              Claim your faucet
            </h2>
            <p className="text-white dark:text-velix-dark-white mt-4">
              You can only claim <b>0.5 METIS</b> every 24 hours
            </p>
            <Button
              onClick={onClaim}
              disabled={isPending || !isAllowedToClaim}
              className="bg-velix-yellow hover:bg-velix-yellow disabled:!cursor-not-allowed mt-10 disabled:opacity-80"
            >
              {!isConnected
                ? "Connect wallet"
                : isPending
                ? "Claiming..."
                : "Claim now"}
            </Button>
          </div>
          <FaucetImage />
        </div>
      </Section>
    </>
  );
}
