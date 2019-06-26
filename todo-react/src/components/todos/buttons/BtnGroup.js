import React, { useState, useEffect } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import {
  createTodo,
  deleteLastTodo,
  deleteAllTodos
} from "../../../store/actions/todoActions";

const BtnGroup = props => {
  const [actualId, setActualId] = useState(0);
  const [lastId, setLastId] = useState("");
  useEffect(() => {
    setActualId(props.firestoreTodosLength + 1);
    setLastId(() =>
      props.firestoreTodos ? props.firestoreTodos.slice(-1)[0] : null
    );
  }, [props]);
  const addTodo = () => {
    let newTodo = {
      title: `Task number ${actualId}`,
      ordered: actualId
    };
    props.createTodo(newTodo);
  };
  const deleteTodo = () => {
    props.deleteLastTodo(lastId.id);
  };
  const deleteAllTodos = () => {
    props.deleteAllTodos();
  };
  return (
    <React.Fragment>
      <div className="btn-group">
        <button className="btn add" onClick={() => addTodo()}>
          Add todo
        </button>
        <button
          disabled={props.firestoreTodosLength <= 0}
          onClick={() => deleteTodo()}
          className="btn remove"
        >
          Remove
        </button>
        <button
          disabled={props.firestoreTodosLength <= 0}
          onClick={() => deleteAllTodos()}
          className="btn clear"
        >
          Clear
        </button>
      </div>
      <TodoList firestoreTodos={props.firestoreTodos} />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo)),
    deleteLastTodo: todoId => dispatch(deleteLastTodo(todoId)),
    deleteAllTodos: () => dispatch(deleteAllTodos())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(BtnGroup);
