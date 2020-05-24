import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      todos: [],
      text: "",
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
      todos: [...this.state.todos, this.state.text],
      text: "",
    });
    console.log(this.state);
  };

  handleDelete = (index) => () => {
    const todosCopy = [...this.state.todos];
    todosCopy.splice(index, 1);

    this.setState({
      todos: todosCopy,
    });
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.onChange} />
        <button onClick={this.handleClick}>
          Add Item
        </button>

        {this.state.todos.map((todo, index) => (
          <div key={index}>
            {todo}
            <button onClick={this.handleDelete(index)}>delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;