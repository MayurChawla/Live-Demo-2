import firebase from 'firebase';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAOHqUJJtRYDFNORYpldDc8SlgBidpxOCw",
    authDomain: "cart-16a98.firebaseapp.com",
    projectId: "cart-16a98",
    storageBucket: "cart-16a98.appspot.com",
    messagingSenderId: "737289810053",
    appId: "1:737289810053:web:9aa5656fc34ab4764fb9ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export { db };