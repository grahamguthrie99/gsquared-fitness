import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyBc4Pp--9dyCDHMNPGJLauWnE4C_LkFfXQ",
  authDomain: "ggfit-ed0f9.firebaseapp.com",
  databaseURL: "https://ggfit-ed0f9.firebaseio.com",
  projectId: "ggfit-ed0f9",
  storageBucket: "ggfit-ed0f9.appspot.com",
  messagingSenderId: "391233489421",
  appId: "1:391233489421:web:1461ec0d5bf0f9399ca344",
  measurementId: "G-XQ23EFBQ1R",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.database();
    this.functions = firebase.functions();
  }
  signOut() {
    this.auth.signOut();
  }
}

export default Firebase;
