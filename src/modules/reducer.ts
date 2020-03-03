import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import auth, { AuthState } from 'modules/auth/reducer';

export interface RootState {
  auth: AuthState;
}

export default combineReducers<RootState>({
  auth,
});
