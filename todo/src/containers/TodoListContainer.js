import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  taskList: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodoCompletion: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
