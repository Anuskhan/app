import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAiTTuPpNj4iVoYd2qEiREadyvNcTiYrAk",
    authDomain: "portfolio-afdfb.firebaseapp.com",
    databaseURL: "https://portfolio-afdfb.firebaseio.com",
    projectId: "portfolio-afdfb",
    storageBucket: "portfolio-afdfb.appspot.com",
    messagingSenderId: "8634159581"
  };
  let fire=firebase.initializeApp(config);
  export default fire; 
