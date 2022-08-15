/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_CLERK_BACKED_API_KEY: string;
  readonly VITE_CLERK_FRONTEND_DOMAIN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
