import React, { Component } from "react";
import "./Todo.css";

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
        <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
          <input
            className='Todo-edit-form-input'
            autocomplete='off'
            type='text'
            name='todo'
            value={this.state.todo}
            onChange={this.handleChange}
            required
          />
          <input className='Todo-edit-form-button' type='submit' value='save' />
        </form>
      );
    } else {
      return (
        <div className='Todo'>
          <span className='Todo-task'>{this.props.todo}</span>
          <div classNmae="Todo-buttons">
            <button className='Todo-button' onClick={this.toggleState}>
              Edit
            </button>
            <button className='Todo-button' onClick={this.handleRemove}>
              Delete
            </button>
          </div>
        </div>
      );
    }
  }
}
export default Todo;
