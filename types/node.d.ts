declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'staging' | 'production' | 'test';
    readonly GA_TRACKING_ID: string;
  }
}
