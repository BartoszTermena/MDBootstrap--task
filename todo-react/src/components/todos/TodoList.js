import React from "react";
import Todo from "./Todo";

const TodoList = ({firestoreTodos}) => {
  return (
    <div className="todo-list">
      {firestoreTodos &&
        firestoreTodos.map(todo => {
          return <Todo todo={todo} key={todo.id} />;
        })}
    </div>
  );
};

export default TodoList;
