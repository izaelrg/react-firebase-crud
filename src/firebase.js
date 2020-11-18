  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBGGzHXwvKrA7bRuCcDqfW12KFg60vUsPw",
    authDomain: "react-766af.firebaseapp.com",
    databaseURL: "https://react-766af.firebaseio.com",
    projectId: "react-766af",
    storageBucket: "react-766af.appspot.com",
    messagingSenderId: "550287288125",
    appId: "1:550287288125:web:3a5b873b8ff8f2d378c754"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()