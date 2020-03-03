import ReactGA from 'react-ga';
import { History } from 'history';
import config from 'src/config';

export const initialize = (history: History) => {
  if (config.isProd) {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
    history.listen(location => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  }
};
