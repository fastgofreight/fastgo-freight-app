import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyC8uDLa6LSDvvX-Iz9o1mWkI3irzxW1U7c",
  authDomain: "fgf-react-app.firebaseapp.com",
  databaseURL: "https://fgf-react-app.firebaseio.com",
  projectId: "fgf-react-app",
  storageBucket: "fgf-react-app.appspot.com",
  messagingSenderId: "618909794972"
};
firebase.initializeApp(config);
export default firebase;