import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import BottomBar from "@/components/ui/velix/BottomBar";
import Number from "@/components/ui/velix/icons/404";
import NotfoundIcon from "@/components/ui/velix/icons/NotfoundIcon";
import VelixPrimaryBlackLogo from "@/components/ui/velix/icons/VelixPrimaryBlackLogo";
import { Link } from "react-router-dom";

export default function Notfound({ isNested = false }: { isNested?: boolean }) {
  return (
    <Section className="px-5 fixed top-0 left-0 right-0 h-screen bg-velix-slate-blue">
      {!isNested && (
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center justify-betwee space-x-32 text-base">
            <Link to="/">
              <VelixPrimaryBlackLogo className="fill-velix-gray w-[4.25rem] h-4" />
            </Link>
            <div className="hidden lg:block">
              <BottomBar isNotFound />
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col items-center w-fit mt-48 mx-auto">
        <NotfoundIcon className="w-full h-56 lg:w-96 lg:h-96" />
        <Number className="absolute w-28 -top-10 lg:w-32 h-20 lg:top-0 mx-auto left-0 right-0" />
        <Button className="flex bg-white hover:bg-velix-primary text-velix-primary hover:text-white font-space-grotesk px-8 font-bold text-center items-center">
          Go to home
        </Button>
      </div>
    </Section>
  );
}
