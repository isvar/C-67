import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCreQQOF0UDaJmn93I1c2Zjqzgu-eeUSS0",
  authDomain: "team-voting-app-a62e5.firebaseapp.com",
  databaseURL: "https://team-voting-app-a62e5-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-a62e5",
  storageBucket: "team-voting-app-a62e5.appspot.com",
  messagingSenderId: "928135157050",
  appId: "1:928135157050:web:195bc85320866b3e51ec03",
  measurementId: "G-KSFK1LV1YP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();