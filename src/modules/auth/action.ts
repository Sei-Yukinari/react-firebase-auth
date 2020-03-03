import { CreatorsToActions } from 'src/utils';
import { SignInApiParams, SignUpApiParams } from 'services/api/auth';
import { User } from 'services/models';

/* actionTypes */
export const actionTypes = {
  SIGN_IN_START: 'AUTH/SIGN_IN_START',
  SIGN_IN_SUCCEED: 'AUTH/SIGN_IN_SUCCEED',
  SIGN_IN_FAIL: 'AUTH/SIGN_IN_FAIL',
  SIGN_UP_START: 'AUTH/SIGN_UP_START',
  SIGN_UP_SUCCEED: 'AUTH/SIGN_UP_SUCCEED',
  SIGN_UP_FAIL: 'AUTH/SIGN_UP_FAIL',
  RECOVER_PASSWORD_START: 'AUTH/RECOVER_PASSWORD_START',
  RECOVER_PASSWORD_SUCCEED: 'AUTH/RECOVER_PASSWORD_SUCCEED',
  RECOVER_PASSWORD_FAIL: 'AUTH/RECOVER_PASSWORD_FAIL',
} as const;

/* actionCreators */
export const signIn = {
  start: (params: SignInApiParams) => ({
    type: actionTypes.SIGN_IN_START,
    payload: { params },
  }),
  succeed: (user: User) => ({
    type: actionTypes.SIGN_IN_SUCCEED,
    payload: { user },
  }),
  fail: (error: Error) => ({
    type: actionTypes.SIGN_IN_FAIL,
    payload: { error },
    error: true,
  }),
};

export const signUp = {
  start: (params: SignUpApiParams) => ({
    type: actionTypes.SIGN_UP_START,
    payload: { params },
  }),
  succeed: (user: User) => ({
    type: actionTypes.SIGN_UP_SUCCEED,
    payload: { user },
  }),
  fail: (error: Error) => ({
    type: actionTypes.SIGN_UP_FAIL,
    payload: { error },
    error: true,
  }),
};

export const recoverPassword = {
  start: (email: string) => ({
    type: actionTypes.RECOVER_PASSWORD_START,
    payload: { email },
  }),
  succeed: () => ({
    type: actionTypes.RECOVER_PASSWORD_SUCCEED,
    payload: {},
  }),
  fail: (error: Error) => ({
    type: actionTypes.RECOVER_PASSWORD_FAIL,
    payload: { error },
    error: true,
  }),
};

export type AuthAction =
  | CreatorsToActions<typeof signIn>
  | CreatorsToActions<typeof signUp>
  | CreatorsToActions<typeof recoverPassword>;
