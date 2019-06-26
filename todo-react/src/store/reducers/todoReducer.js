const initState = {
  todos: [],
  todosLength: 0
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("Create todo success");
      return state;
    case "CREATE_TODO_ERROR":
      console.log("Create todo error");
      return state;
    case "DELETE_TODO":
      console.log("Delete todo success");
      return state;
    case "DELETE_TODO_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
