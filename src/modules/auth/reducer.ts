import { Reducer } from 'redux';

import { User } from 'services/models';
import { AuthAction, actionTypes } from './action';

export interface AuthState {
  loaded: boolean;
  isLogin: boolean;
  user: User;
  errorMessage: string;
}

export const initialState: AuthState = {
  loaded: false,
  isLogin: false,
  user: {
    uid: '',
    token: '',
  },
  errorMessage: '',
};

export const reducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_START:
      return {
        ...state,
        loaded: true,
      };
    case actionTypes.SIGN_IN_SUCCEED:
      return {
        ...state,
        loaded: false,
        ...state.user,
        user: action.payload.user,
      };
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        loaded: false,
        errorMessage: action.payload.error.message,
      };
    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        loaded: true,
      };
    case actionTypes.SIGN_UP_SUCCEED:
      return {
        ...state,
        loaded: false,
        ...state.user,
        user: action.payload.user,
      };
    case actionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        loaded: false,
        errorMessage: action.payload.error.message,
      };
    case actionTypes.RECOVER_PASSWORD_START:
      return {
        ...state,
      };
    case actionTypes.RECOVER_PASSWORD_SUCCEED:
      return {
        ...state,
      };
    case actionTypes.RECOVER_PASSWORD_FAIL:
      return {
        ...state,
        errorMessage: action.payload.error.message,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
