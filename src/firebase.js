// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAJsxUVDDHhzS_8WiEtdCysBZjaOQMr194',
  authDomain: 'slack-clone-31d9a.firebaseapp.com',
  databaseURL: 'https://slack-clone-31d9a.firebaseio.com',
  projectId: 'slack-clone-31d9a',
  storageBucket: 'slack-clone-31d9a.appspot.com',
  messagingSenderId: '132044464562',
  appId: '1:132044464562:web:15ffb5452911e5e99984ab',
  measurementId: 'G-BPZ24K25GW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
