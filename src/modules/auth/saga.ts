import { fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  actionTypes,
  recoverPassword,
  signIn,
  signUp,
} from 'modules/auth/action';
import {
  authAndGetUser,
  createUser,
  sendPasswordResetWithMail,
} from 'services/api/auth';
import config from 'src/config';
import { push } from 'connected-react-router';
import { User } from 'services/models';

export function* runFetchUser(action: ReturnType<typeof signIn.start>) {
  try {
    const user: User = yield call(
      authAndGetUser,
      action.payload.params.email,
      action.payload.params.password,
    );
    yield put(signIn.succeed(user));
    yield put(push('/succeed'));
  } catch (e) {
    yield put(signIn.fail(e));
  }
}

export function* runCreateUser(action: ReturnType<typeof signUp.start>) {
  try {
    const user: User = yield call(
      createUser,
      action.payload.params.email,
      action.payload.params.password,
    );
    yield put(signUp.succeed(user));
    yield put(push('/succeed'));
  } catch (e) {
    yield put(signUp.fail(e));
  }
}

export function* runRecoverPassword(
  action: ReturnType<typeof recoverPassword.start>,
) {
  try {
    yield call(sendPasswordResetWithMail, action.payload.email);
    yield put(recoverPassword.succeed());
    yield put(push('/send_mail'));
  } catch (e) {
    yield put(recoverPassword.fail(e));
  }
}

function* watchSignIn() {
  yield takeLatest(actionTypes.SIGN_IN_START, runFetchUser);
}

function* watchSignUp() {
  yield takeLatest(actionTypes.SIGN_UP_START, runCreateUser);
}

function* watchRecoverPassword() {
  yield takeLatest(actionTypes.RECOVER_PASSWORD_START, runRecoverPassword);
}

export default function* rootSaga() {
  yield fork(watchSignIn);
  yield fork(watchSignUp);
  yield fork(watchRecoverPassword);
}
