import React, { Component } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  createTodo = (newtodo) => {
    this.setState({
      todos: [...this.state.todos, newtodo],
    });
  };

  removeTodo = (todoid) => {
    let { todos } = this.state;
    this.setState({ todos: todos.filter((ele) => ele.id !== todoid) });
  };

  updateTodo = (todoid, newtodo) => {
    let { todos } = this.state;
    this.setState({
      todos: todos.map((ele) => {
        if (ele.id === todoid) return { id: todoid, todo: newtodo };
        return ele;
      }),
    });
  };
  render() {
    let list = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        todo={todo.todo}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        required
      />
    ));
    return (
      <ul>
        <NewTodo createTodo={this.createTodo} />
        {list}
      </ul>
    );
  }
}

export default TodoList;
