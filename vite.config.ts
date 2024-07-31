import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

console.log(process.env.APP_MODE);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  define: {
    __APP_MODE__: JSON.stringify(process.env.APP_MODE || "")
  },
  build: {
    outDir: path.join(__dirname, "dist/" + process.env.APP_MODE)
  }
});
