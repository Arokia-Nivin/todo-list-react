import React, { Component } from "react";
import { v4 } from "uuid";
import "./NewTodo.css";
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
      <div>
        <form className='NewTodo-form' onSubmit={this.handleSubmit}>
          <input
            class='NewTodo-form-input'
            autocomplete='off'
            type='text'
            name='todo'
            id='todo'
            value={this.state.todo}
            onChange={this.handlechange}
            required
          />
          <button class='NewTodo-form-button'>+</button>
        </form>
      </div>
    );
  }
}
export default NewTodo;
