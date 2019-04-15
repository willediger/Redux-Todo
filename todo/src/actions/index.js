import * as ACTION_TYPES from "../actions/actionTypes";

let nextTodoId = 0;
export const addTodo = task => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: {
    id: nextTodoId++,
    task,
    completed: false
  }
});

export const toggleTodo = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  payload: {
    id
  }
});

export const deleteTodo = id => ({
  type: ACTION_TYPES.DELETE_TODO,
  payload: {
    id
  }
});
