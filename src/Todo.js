import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
      isediting: false,
    };
  }

  toggleState = () => {
    this.setState({
      isediting: !this.state.isediting,
    });
  };

  handleRemove = (e) => {
    this.props.removeTodo(this.props.id);
  };
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.todo);
    this.toggleState();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.isediting) {
      return (
        <form onSubmit={this.handleUpdate}>
          <input
            autocomplete='off'
            type='text'
            name='todo'
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type='submit' value='save' />
        </form>
      );
    } else {
      return (
        <div>
          <li>{this.props.todo}</li>
          <button onClick={this.toggleState}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
  }
}
export default Todo;
