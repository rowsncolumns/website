export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      SENDGRID_API_KEY: string;
      LICENSE_SIGNING_KEY: string;
      LICENSE_API_TOKEN: string;
    }
  }
}
