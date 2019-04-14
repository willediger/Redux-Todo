import React from 'react';
import './Todo.css';

const Todo = props => {
  const classes = ['item'];
  if (props.task.completed) {classes.push('completed')}
  if (props.task.filtered) {classes.push('filtered')}
  return (
    <div 
      className={classes.join(' ')} 
      onClick={props.toggleTodoCompletion(props.task.id)}
    >
      {props.task.taskName}
    </div>
  );
}



export default Todo