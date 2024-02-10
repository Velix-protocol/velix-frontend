import VelixCoin from "@/components/svg/Velixcoin.svg";

export default function Footer() {
  return (
    <div className="relative max-md:h-[26rem] h-[48.5rem] max-md:mt-20 mt-16">
      <div className="absolute flex justify-center bg-velix-slate-blue top-0 left-0 right-0 w-full bottom-0 clipped" />
      <div className="absolute top-0 flex justify-center right-0 left-0">
        <VelixCoin className="max-md:mt-0  mt-24" />
      </div>
    </div>
  );
}
