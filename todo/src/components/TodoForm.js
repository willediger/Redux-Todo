import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({taskName: e.target.value})
  }

  onSubmit = e => {
    if (this.state.taskName.length) {
      this.props.addTodo(this.state.taskName)(e);
      this.setState({taskName: ''});
    } else {
      e.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="ui input">
          <input 
            name="taskName"
            value={this.state.taskName}
            placeholder="...todo" 
            onChange={this.inputChangeHandler}
          />
        </div>
        <button 
          type="submit" 
          className="ui button first-button"
        >
          Add Todo
        </button>
        <button 
          type="button" 
          className="ui button second-button" 
          onClick={this.props.clearCompletedTodos}
        >
          Clear Completed
        </button>
      </form>
    );
  }
} 


export default TodoForm;