import React, { Fragment } from "react";

const Todo = ({ todo }) => {
  return (
    <Fragment>
      <ul className="list-group">
        <li>{todo.title}</li>
      </ul>
    </Fragment>
  );
};

export default Todo;
