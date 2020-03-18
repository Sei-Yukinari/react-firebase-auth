import { RootState } from '../reducer';

export const selectAuthState = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user.firebaseUser;
