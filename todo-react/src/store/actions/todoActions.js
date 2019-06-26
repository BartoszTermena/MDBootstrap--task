export const createTodo = todo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .add({
        ...todo
      })
      .then(() => {
        dispatch({ type: "CREATE_TODO" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_TODO_ERROR" }, err);
      });
  };
};

export const deleteLastTodo = todoId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .doc(todoId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_TODO" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_TODO_ERROR", err });
      });
  };
};

export const deleteAllTodos = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .get()
      .then(val => {
        val.forEach(val => {
          firestore
            .collection("todos")
            .doc(val.id)
            .delete()
            .then(() => {
              dispatch({ type: "DELETE_TODO" });
            })
            .catch(err => {
              dispatch({ type: "DELETE_TODO_ERROR", err });
            });
        });
      });
  };
};
