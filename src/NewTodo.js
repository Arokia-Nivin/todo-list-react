import React, { Component } from "react";
import { v4 } from "uuid";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: v4() });
    this.setState({ todo: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='todo'>New Todo</label>
        <input
          autocomplete='off'
          type='text'
          name='todo'
          id='todo'
          value={this.state.todo}
          onChange={this.handlechange}
          required
        />
        <input type='submit' value='add new todo' />
      </form>
    );
  }
}
export default NewTodo;
