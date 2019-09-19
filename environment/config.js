import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = firebaseApp.auth();