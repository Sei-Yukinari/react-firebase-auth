import prodConfig from './production';
import stgConfig from './staging';
import devConfig from './development';

export type Config = typeof prodConfig;

const env = process.env.NODE_ENV;

/* eslint-disable-next-line import/no-mutable-exports */
let config: Config = devConfig;

if (env === 'production') {
  config = prodConfig;
}

if (env === 'staging') {
  config = stgConfig;
}

if (env === 'development') {
  config = devConfig;
}

export default config;
