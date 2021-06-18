import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOax9bMKnGm63RQXsUtunM9Ot0ST8-gBQ',
  authDomain: 'discord-clone-dd332.firebaseapp.com',
  projectId: 'discord-clone-dd332',
  storageBucket: 'discord-clone-dd332.appspot.com',
  messagingSenderId: '439298754797',
  appId: '1:439298754797:web:bb554be7350a1cc447e4e4',
  measurementId: 'G-MW0E7NLMKH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
