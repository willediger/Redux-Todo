import { ADD_TODO, TOGGLE_TODO } from "../actions/index";

const todos = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(e =>
        e.id === action.payload.id ? { ...e, completed: !e.completed } : e
      );
    default:
      return state;
  }
};

export default todos;
