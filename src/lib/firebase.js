import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Import seed file here
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC_SKYNytB5ojzZXiaZx1lssSXQsRvCn2c",
    authDomain: "instagramclone-702ed.firebaseapp.com",
    projectId: "instagramclone-702ed",
    storageBucket: "instagramclone-702ed.appspot.com",
    messagingSenderId: "568158916428",
    appId: "1:568158916428:web:fda24334ba83bd520289e9"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Call seed file (only once)
// seedDatabase(firebase);

export { firebase, FieldValue };