import React, { Fragment } from "react";

import BtnGroup from "./buttons/BtnGroup";
import logo from "../../img/React.js_logo-512.png";
import logo_firebase from "../../img/firebase.png";
import "./todos.css";

const Todos = ({ firestoreTodos, firestoreTodosLength }) => {
  return (
    <Fragment>
      <img src={logo} alt="react" className="logo" />
      <img src={logo_firebase} alt="react" className="logo-firebase" />
      <div className="container">
        <BtnGroup
          firestoreTodos={firestoreTodos}
          firestoreTodosLength={firestoreTodosLength}
        />
      </div>
    </Fragment>
  );
};

export default Todos;
