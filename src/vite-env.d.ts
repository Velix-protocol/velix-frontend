/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare const __APP_MODE__: "landingPage" | "app";

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum: any;
}
