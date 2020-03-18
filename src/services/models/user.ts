import firebase from 'firebase';

export interface User {
  firebaseUser : firebase.User | null,
}
