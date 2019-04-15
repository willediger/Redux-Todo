import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => (
  <div className="ui segment">
    <div className="ui relaxed list">
      {props.taskList.map(t => (
        <Todo
          task={t}
          toggleTodoCompletion={props.toggleTodoCompletion}
          deleteTodo={props.deleteTodo}
          key={t.id}
        />
      ))}
    </div>
  </div>
);

export default TodoList;
