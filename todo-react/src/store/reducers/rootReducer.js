import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  todo: todoReducer,
  firestore: firestoreReducer
});

export default rootReducer;
