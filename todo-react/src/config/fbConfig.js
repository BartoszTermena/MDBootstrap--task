import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAnQxmm9b_hTEV2YgCYIyuJ7E5shR5stng",
  authDomain: "todo-react-be563.firebaseapp.com",
  databaseURL: "https://todo-react-be563.firebaseio.com",
  projectId: "todo-react-be563",
  storageBucket: "todo-react-be563.appspot.com",
  messagingSenderId: "748678287422",
  appId: "1:748678287422:web:de12d290254c110e"
};

firebase.initializeApp(config);

export default firebase;
