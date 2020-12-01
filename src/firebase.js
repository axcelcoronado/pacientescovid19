import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoNWTDkWfiF4-yx3xyLWBvtDUN2Ejz4EU",
    authDomain: "pacientescovid-28370.firebaseapp.com",
    databaseURL: "https://pacientescovid-28370.firebaseio.com",
    projectId: "pacientescovid-28370",
    storageBucket: "pacientescovid-28370.appspot.com",
    messagingSenderId: "714525608277",
    appId: "1:714525608277:web:01271ef759ada8e8fd47dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db, auth}