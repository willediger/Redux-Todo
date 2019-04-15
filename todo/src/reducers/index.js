import { combineReducers } from "redux";
import todos from "./todos";

//using combineReducers even though we only have one reducer
//because we may want to add more reducers in the future
export default combineReducers({
  todos
});
