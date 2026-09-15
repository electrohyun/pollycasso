/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_MSW: 'true' | 'false';
  readonly VITE_USE_SOCKET_MOCK: 'true' | 'false';
  readonly VITE_API_BASE_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_SOCIAL_LOGIN_URL: string;
  readonly VITE_ASSET_CDN_URL: string;
  readonly VITE_SECRET_PAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
