import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBTPmzrFMXBqB-ZPvesZ3oe0zkXPs4tzeI",
  authDomain: "lab-app-2814a.firebaseapp.com",
  databaseURL: "https://lab-app-2814a.firebaseio.com",
  projectId: "lab-app-2814a",
  storageBucket: "lab-app-2814a.appspot.com",
  messagingSenderId: "313340570688"
  };
  let fire=firebase.initializeApp(config);


  export default fire; 
