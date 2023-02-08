/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly MAIL_SYSTEM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
