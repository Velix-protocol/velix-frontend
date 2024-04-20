import { useTheme } from "@/context/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const { pathname } = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`bg-black/30 p-2 rounded-full ${
        pathname.includes("app") && "dark:bg-velix-form-input-dark"
      }`}
    >
      {theme === "dark" ? (
        <SunIcon className="text-white" />
      ) : (
        <MoonIcon className="text-transparent fill-white" />
      )}
    </button>
  );
}
