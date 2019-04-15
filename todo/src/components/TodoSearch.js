import React from 'react';
import './Todo.css';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  inputChangeHandler = e => {
    this.setState({search: e.target.value})
  }

  onSearch = e => {
    const event = e;
    if (this.state.search.length) {
      this.props.clearSearchFilter(event)
      this.props.searchTodos(this.state.search)(event);
    } else {
      e.preventDefault();
    }
  }

  onClear = e => {
    this.props.clearSearchFilter(e);
    this.setState({search: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSearch}>
        <div className="ui input">
          <input 
            name="search"
            value={this.state.search}
            placeholder="Search for..." 
            onChange={this.inputChangeHandler}
          />
        </div>
        <button 
          type="submit" 
          className="ui button first-button"
        >
          Search
        </button>
        <button 
          type="button" 
          className="ui button second-button"
          onClick={this.onClear}
        >
          Clear Search Filter
        </button>
      </form>
    );
  }
} 


export default TodoSearch;