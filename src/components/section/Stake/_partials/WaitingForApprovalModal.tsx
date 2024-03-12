import Loader from "@/components/ui/velix/icons/Loader";

export default function WaitingModal({
  title,
  subTitle
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="fixed z-[999] px-8 bg-velix-primary/20 inset-0 font-space-grotesk">
      <div className="bg-white max-w-screen-sm mx-auto flex justify-center items-center mt-40 relative p-10 lg:p-20 rounded-lg">
        <div className="flex flex-col gap-3 items-center">
          <Loader className="w-20 h-20 animate-spin mb-6" />
          <p className="font-bold text-center text-2xl lg:text-4xl">{title}</p>
          <p className="text-velix-gray text-center text-base">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
