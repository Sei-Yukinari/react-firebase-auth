import firebase from 'src/utils/firebase';
import { User } from 'services/models';

import UserCredential = firebase.auth.UserCredential;

export interface SignInApiParams {
  email: string;
  password: string;
}

export interface SignUpApiParams {
  email: string;
  password: string;
}

export const authAndGetUser = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const userCredential: UserCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return {
      firebaseUser: userCredential.user,
    };
  } catch (err) {
    throw Error(err.message);
  }
};

export const createUser = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const userCredential: UserCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    return {
      firebaseUser: userCredential.user,
    };
  } catch (err) {
    throw Error(err.message);
  }
};

export const sendPasswordResetWithMail = async (
  email: string,
): Promise<void> => {
  try {
    const actionCodeSettings: firebase.auth.ActionCodeSettings = {
      url: `http://localhost:8001/`,
      handleCodeInApp: false,
    };

    await firebase.auth().sendPasswordResetEmail(email, actionCodeSettings);
  } catch (err) {
    throw Error(err.message);
  }
};

export const signOut = async (
): Promise<void> => {
  try {
    firebase.auth().signOut();
  } catch (err) {
    throw Error(err.message);
  }
};
