import React from "react";
import "./Todo.css";

const Todo = props => {
  const classes = ["item"];
  if (props.task.completed) {
    classes.push("completed");
  }
  if (props.task.filtered) {
    classes.push("filtered");
  }
  return (
    <div
      className={classes.join(" ")}
      onClick={() => props.toggleTodoCompletion(props.task.id)}
    >
      <button
        className="ui button"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation(); //stop a click from propagating up to parent div
          //although this isn't really necessary since it's being removed, but still good practice
          props.deleteTodo(props.task.id);
        }}
      >
        Delete
      </button>
      {props.task.task}
    </div>
  );
};

export default Todo;
