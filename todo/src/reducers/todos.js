import * as ACTION_TYPES from "../actions/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload];
    case ACTION_TYPES.TOGGLE_TODO:
      return state.map(e =>
        e.id === action.payload.id ? { ...e, completed: !e.completed } : e
      );
    case ACTION_TYPES.DELETE_TODO:
      return state.filter(e => e.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;
