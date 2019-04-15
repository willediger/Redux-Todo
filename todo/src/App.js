import React from "react";

import "./App.css";

import TodoListContainer from "./containers/TodoListContainer";
import TodoForm from "./components/TodoForm";
// import TodoSearch from "./components/TodoSearch";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     taskList: this.grabLocalStorageTaskList()
  //   };
  // }

  // grabLocalStorageTaskList = () => {
  //   const localStorageTaskList = localStorage.getItem("taskList");
  //   if (localStorageTaskList) {
  //     return JSON.parse(localStorageTaskList);
  //   }
  //   return [];
  // };

  // clearCompletedTodos = e => {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     const updatedTaskList = prevState.taskList.filter(el => !el.completed);
  //     localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  //     return { taskList: updatedTaskList };
  //   });
  // };

  // searchTodos = search => e => {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       taskList: prevState.taskList.map(el => {
  //         if (!el.taskName.includes(search)) {
  //           return {
  //             ...el,
  //             filtered: true
  //           };
  //         }
  //         return el;
  //       })
  //     };
  //   });
  // };

  // clearSearchFilter = e => {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       taskList: prevState.taskList.map(el => {
  //         return {
  //           ...el,
  //           filtered: false
  //         };
  //       })
  //     };
  //   });
  // };

  render() {
    return (
      <div className="container">
        <TodoForm />
        {/* <TodoSearch
          searchTodos={this.searchTodos}
          clearSearchFilter={this.clearSearchFilter}
        /> */}
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
