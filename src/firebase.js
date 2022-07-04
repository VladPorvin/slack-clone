import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBwpN7n6riZmM3YUCaGEY6u6GQnT_-lH6I',
  authDomain: 'slack-clone-e841c.firebaseapp.com',
  projectId: 'slack-clone-e841c',
  storageBucket: 'slack-clone-e841c.appspot.com',
  messagingSenderId: '760054070576',
  appId: '1:760054070576:web:d6380824b06134b2219cf5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
