import React from "react";

import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoSearch from "./components/TodoSearch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.grabLocalStorageTaskList()
    };
  }

  grabLocalStorageTaskList = () => {
    const localStorageTaskList = localStorage.getItem("taskList");
    if (localStorageTaskList) {
      return JSON.parse(localStorageTaskList);
    }
    return [];
  };

  addTodo = taskName => e => {
    e.preventDefault();
    const task = {
      taskName: taskName,
      id: Date.now(),
      completed: false,
      filtered: false
    };
    this.setState(prevState => {
      const newTaskList = [...prevState.taskList, task];
      localStorage.setItem("taskList", JSON.stringify(newTaskList));
      return { taskList: [...prevState.taskList, task] };
    });
  };

  toggleTodoCompletion = id => e => {
    this.setState(prevState => {
      let taskList = prevState.taskList;
      const idx = taskList.map(el => el.id).indexOf(id);
      taskList[idx].completed = !taskList[idx].completed;
      return {
        taskList: taskList
      };
    });
    localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    this.setState(prevState => {
      const updatedTaskList = prevState.taskList.filter(el => !el.completed);
      localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
      return { taskList: updatedTaskList };
    });
  };

  searchTodos = search => e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.map(el => {
          if (!el.taskName.includes(search)) {
            return {
              ...el,
              filtered: true
            };
          }
          return el;
        })
      };
    });
  };

  clearSearchFilter = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.map(el => {
          return {
            ...el,
            filtered: false
          };
        })
      };
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <TodoForm
          addTodo={this.addTodo}
          clearCompletedTodos={this.clearCompletedTodos}
        />
        <TodoSearch
          searchTodos={this.searchTodos}
          clearSearchFilter={this.clearSearchFilter}
        />
        <TodoList
          taskList={this.state.taskList}
          toggleTodoCompletion={this.toggleTodoCompletion}
        />
      </div>
    );
  }
}

export default App;
