import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS9A46zY9ixfhNgswL3oMFX94isixDkE4",
  authDomain: "contact-list-2cfae.firebaseapp.com",
  projectId: "contact-list-2cfae",
  storageBucket: "contact-list-2cfae.appspot.com",
  messagingSenderId: "381328954416",
  appId: "1:381328954416:web:a0d7a25a208b3572eec9f5"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;