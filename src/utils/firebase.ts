import firebase from 'firebase';
import config from 'src/config';

firebase.initializeApp(config.firebase);

export default firebase;
