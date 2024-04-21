import { useTheme } from "@/context/theme-provider";
import { cn } from "@/utils/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ThemeButton({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const { pathname } = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        `bg-black/30 p-2 rounded-full ${
          pathname.includes("app") && "dark:bg-velix-form-input-dark"
        }`,
        className
      )}
    >
      {theme === "dark" ? (
        <SunIcon className="text-white" />
      ) : (
        <MoonIcon className="text-transparent fill-white" />
      )}
    </button>
  );
}
