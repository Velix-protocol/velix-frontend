export const INFURA_API_KEY = import.meta.env.VITE_INFURA_API_KEY;
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const VELIX_API_URL = import.meta.env.VITE_VELIX_API_URL;
export const VITE_VELIX_SUPER_NFT_HASH = import.meta.env
  .VITE_VELIX_SUPER_NFT_HASH;
export const VITE_VELIX_SUPER_NFT_NAME = import.meta.env
  .VITE_VELIX_SUPER_NFT_NAME;
export const VELIX_SUPER_NFT_URL = import.meta.env.VITE_VELIX_SUPER_NFT_URL;
export const VEMETIS_CONTRACT_ADDRESS =
  "0x4aff6784f9a8c63CD18aEe48550150835f2345E0" as const;

export const MAX_INPUT_LENGTH = 10;

export const APP_MODE = __APP_MODE__;
export const VELIX_APP_ENVIRONMENT = import.meta.env
  .VITE_VELIX_APP_ENVIRONMENT as
  | "production"
  | "staging"
  | "development"
  | "local";
