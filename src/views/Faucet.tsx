import WaitingModal from "@/components/app/WaitingForApprovalModal";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/velix/modal/ModalLayout";
import FaucetImage from "@/components/ui/velix/icons/FaucetImage";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useCallback, useLayoutEffect, useState } from "react";
import { useAccount } from "wagmi";
import dayjs from "dayjs";
import { useFaucet } from "@/hooks/useHttp";
import SuccessModal from "@/components/ui/velix/modal/SuccessModal.tsx";

export default function Faucet() {
  const { claim, isPending, isSuccess, reset } = useFaucet();
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const [isAllowedToClaim, setIsAllowedToClaim] = useState(true);

  const checkIsAllowedToClaim = useCallback(() => {
    const now = dayjs();
    const date = localStorage.getItem("velix-allowed-to-claim-after");

    if (date) {
      setIsAllowedToClaim(now.isAfter(JSON.parse(date)));
    } else {
      setIsAllowedToClaim(true);
    }
  }, []);

  useLayoutEffect(() => {
    checkIsAllowedToClaim();
  }, [checkIsAllowedToClaim, isAllowedToClaim]);

  const onClaim = async () => {
    if (!isConnected) return open();
    if (!address) return;

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

    try {
      if (isConnected) {
        await claim();
        saveNewDate();
        setIsAllowedToClaim(false);
        return;
      }
    } catch (e) {
      console.log("Faucet error: ", e);
    }
  };

  return (
    <>
      {isPending && <WaitingModal title="Claiming is in process" subTitle="" />}
      {isSuccess && (
        <Modal onClose={reset}>
          <SuccessModal onClose={reset} />
        </Modal>
      )}
      <Section className="max-lg:px-5">
        <div className="my-40 bg-velix-blue dark:bg-velix-black flex max-lg:flex-col-reverse justify-between items-center lg:p-24 rounded-xl">
          <div className="font-space-grotesk max-lg:mt-10 max-lg:flex flex-col items-center max-lg:py-10">
            <h2 className="font-bold text-xl max-lg:text-center lg:text-6xl text-white dark:text-velix-dark-white">
              Claim your faucet
            </h2>
            <p className="text-white dark:text-velix-dark-white mt-4 max-md:max-w-[15rem] max-md:text-center">
              You can only claim <b>0.5 METIS</b> every 24 hours
            </p>
            <Button
              onClick={onClaim}
              disabled={isPending || !isAllowedToClaim}
              className="bg-velix-yellow max-lg:mx-auto hover:bg-velix-yellow disabled:!cursor-not-allowed mt-10 disabled:opacity-80"
            >
              {!isConnected
                ? "Connect wallet"
                : isPending
                  ? "Claiming..."
                  : "Claim now"}
            </Button>
          </div>
          <FaucetImage
            className="max-md:w-40 max-md:h-40 max-lg:w-56 max-lg:h-56 max-lg:mt-10"
            aria-label="FaucetImage"
          />
        </div>
      </Section>
    </>
  );
}
