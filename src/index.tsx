import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as analytics from 'src/utils/analytics';
import createStore from 'src/store';
import StyleProvider from 'src/store/providers/StyleProvider';
import App from 'src/App';
import 'src/reset.css';

const history = createBrowserHistory();
const store = createStore(history);

analytics.initialize(history);

ReactDOM.render(
  <Provider store={store}>
    <StyleProvider>
      <Router history={history}>
        <App />
      </Router>
    </StyleProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
