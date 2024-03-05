import { InfoIcon } from "lucide-react";
import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import AppContent from "../layouts/AppContent";
import StakeLayout from "../layouts/StakeLayout";
import Statitics from "./Statitics";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import { ChangeEvent, useEffect, useState } from "react";
import Modal from "../ui/velix/Modal";
import ClockIcon from "../ui/velix/icons/ClockIcon";
// import { useApproveMinting } from "@/hooks/use-contract";

export default function Mint() {
  const [amountToMint, setAmountToMint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep] = useState<1 | 2>(1);
  // const  = useApproveMinting()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToMint(e.target.value);
    console.log(e.target.value);
  };

  const onMint = () => {
    if (!amountToMint || !amountToMint.trim()) return;
    setShowModal(true);
    console.log("mint");
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3 items-center">
            <ClockIcon className="w-10 h-10 mb-6" />
            <p className="font-bold text-center text-2xl lg:text-4xl">
              Waiting for Approval
            </p>
            <p className="text-velix-gray text-center text-base">
              Confirm this transaction in your wallet.
            </p>

            {currentStep === 2 && (
              <StakingFormButtom role="mint" onMint={() => null} />
            )}
            <div className="flex gap-0 items-center w-fit h-fit mt-8">
              <p className="text-white bg-velix-primary h-8 w-8 flex justify-center items-center rounded-full">
                1
              </p>
              <div
                className={`h-1 w-32 ${
                  currentStep === 1
                    ? "bg-gradient-to-r from-velix-primary to-velix-gray/20"
                    : "bg-velix-primary"
                }`}
              />
              <p
                className={`h-8 w-8 flex justify-center items-center p-2 rounded-full ${
                  currentStep === 2
                    ? "text-white bg-velix-primary"
                    : "bg-velix-gray/20 text-velix-primary"
                }`}
              >
                2
              </p>
            </div>
          </div>
        </Modal>
      )}
      <div>
        <Section className="px-5 pb-32 lg:pb-16">
          <StakeTitleWrapper>
            <div className="w-full">
              <Title
                name="Mint"
                subtitle={
                  <p className="flex items-start justify-start gap-4">
                    <span>
                      <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                    </span>
                    <span>
                      Mint veMETIS to participate in liquid staking.
                      <br /> veMETIS is a liquid staking derivative of METIS.
                    </span>
                  </p>
                }
              />
            </div>
            <div className="w-full">
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
            </div>
          </StakeTitleWrapper>
          <AppContent>
            <div className="w-full h-fit">
              <div className="w-full block lg:hidden mt-32">
                <Title
                  name="Mint"
                  subtitle={
                    <p className="flex items-start justify-start gap-4">
                      <span>
                        <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                      </span>
                      <span>
                        Mint veMETIS to participate in liquid staking.
                        <br /> veMETIS is a liquid staking derivative of METIS.
                      </span>
                    </p>
                  }
                />
              </div>
              <StakeLayout
                onFromValueChange={onChange}
                showSwapIcon={false}
                isStaking={false}
              >
                <div className="mt-9 flex flex-col gap-7">
                  <StakingDetails
                    title="Exchange Rate"
                    value="1 METIS = 1 veMETIS"
                  />
                  <StakingDetails
                    title="Average return"
                    value={
                      <span className="text-xs lg:text-base">
                        =3.13 <span className="font-bold">APR</span>
                      </span>
                    }
                  />
                </div>
                <StakingFormButtom onMint={onMint} role="mint" />
              </StakeLayout>
            </div>
            <div className="w-full">
              <div className="w-full block lg:hidden mt-10">
                <Title
                  name="Velix statistics"
                  subtitle="View your  veMETIS statistics."
                />
              </div>
              <Statitics />
            </div>
          </AppContent>
        </Section>
      </div>
    </>
  );
}
