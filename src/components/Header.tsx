import VelixLogo from "@/components/svg/VelixLogoGroup";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Switch } from "./ui/switch";
import { useTheme } from "@/context/theme-provider";

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    initialInView: true
  });

  const { setTheme, theme } = useTheme();

  return (
    <div>
      <header
        ref={ref}
        className="flex justify-between items-center py-5 lg:py-14 z-50"
      >
        <Link to="/">
          <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem]" />
        </Link>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => {
              // return navigate("/app/mint");
            }}
            className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
          >
            Launch app
          </Button>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
      </header>

      <header
        className={`px-5 justify-between -top-full -translate-y-full fixed left-0 right-0 z-[999] items-center py-5 bg-velix-primary ${
          !inView ? "!top-0 !translate-y-0 transition-all duration-200" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-5xl xl:max-w-7xl mx-auto relative">
          <Link to="/">
            <VelixLogo className="w-[4.25rem] h-4 lg:h-5 lg:w-[5rem]" />
          </Link>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                // return navigate("/app/mint");
              }}
              className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow"
            >
              Launch app
            </Button>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
            />
          </div>
        </div>
      </header>
    </div>
  );
}
