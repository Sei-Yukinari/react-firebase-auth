import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import middlewares from 'src/store/middlewares';
import rootReducer from 'src/modules/reducer';
import rootSaga from 'src/modules/saga';
import config from 'src/config';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';

const createStore = (history: History) => {
  /* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
  const composeEnhancers =
    config.isDev &&
    config.isBrowser &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const sagaMiddleWare = createSagaMiddleware();
  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleWare),
  );
  const store = reduxCreateStore(rootReducer, enhancer);
  sagaMiddleWare.run(rootSaga);

  return store;
};

export default createStore;
