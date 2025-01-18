import ModalLayout from "@/components/ui/velix/modal/ModalLayout.tsx";
import Loader from "@/components/ui/velix/icons/Loader.tsx";
import SuccessModal from "@/components/ui/velix/modal/SuccessModal.tsx";
import { useCallback } from "react";
import { supportedChains } from "@/utils/config.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";

type ModalProps = {
  onClose: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  txHash: string;
  error: string;
  title: string;
};

export default function StandardModal({
  onClose,
  isSuccess,
  isLoading,
  txHash,
  title,
  error
}: ModalProps) {
  const chain = useSupportedChain();
  const onViewTransaction = useCallback(() => {
    window.open(
      `${supportedChains[chain]?.explorerUrls.testnet.txUrl}${txHash}`
    );
  }, [chain, txHash]);

  return (
    <div>
      <ModalLayout
        onClose={() => {
          onClose();
        }}
      >
        <div className="flex flex-col gap-3 items-center">
          {isLoading && <Loader className="w-20 h-20 mb-6 animate-spin" />}
          <p className="font-bold text-center text-2xl lg:text-4xl">{title}</p>
          {error && (
            <p className="text-red-600 text-center text-base">{error}</p>
          )}

          {isSuccess && (
            <SuccessModal
              onViewOnExploer={onViewTransaction}
              onClose={onClose}
            />
          )}
        </div>
      </ModalLayout>
    </div>
  );
}
