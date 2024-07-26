import { useReferralCodeStore } from "@/store/referralCodeStore";
import { useCallback, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useReferralCode = () => {
  const [params, setParamas] = useSearchParams();
  const { cleanUpReferralCode, setReferralCode, referralCode } =
    useReferralCodeStore();

  useLayoutEffect(() => {
    if (!params.get("referralCode")) return;
    setReferralCode(params.get("referralCode") as string);
  }, [params, setReferralCode]);

  const removeReferralCodeFromStoreAndUrl = useCallback(() => {
    setParamas("");
    cleanUpReferralCode();
  }, [cleanUpReferralCode, setParamas]);

  return {
    removeReferralCodeFromStoreAndUrl,
    referralCode
  };
};

export default useReferralCode;
