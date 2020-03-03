export default {
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
  isBrowser: typeof window !== 'undefined',
  pageTitle: 'Godspeed Portal EX',
  localStorageTokenKey: 'godspeed-excel',
  loginPageUrl: 'https://login',
  apiUrl: 'https://xxx/api/v1',
  baseUrl: 'http://localhost:8000',
  firebase: {
    apiKey: process.env.FIREBASE_APIKEY || '',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
  },
};
