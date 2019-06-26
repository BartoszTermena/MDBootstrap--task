import React from "react";
import TodosContainer from "./components/todos/TodosContainer";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./index.css";

const App = ({ todos, todosLength }) => {
  return (
    <div className="App">
      <TodosContainer
        firestoreTodos={todos}
        firestoreTodosLength={todosLength}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.firestore.ordered.todos,
    todosLength: state.firestore.ordered.todos
      ? state.firestore.ordered.todos.length
      : 0
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "todos", orderBy: ["ordered", "asc"] }])
)(App);
