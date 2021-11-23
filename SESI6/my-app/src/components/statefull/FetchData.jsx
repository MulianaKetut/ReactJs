import React from "react";

export default class FetchData extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data.slice(0, 20) }));
  }

  // Dengan function ini, kita bisa
  // membatasi, keadaan / kejadian apa saja yang bisa men-trigger
  // re-render. Default return value dari function ini adalah true
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.todos.length !== nextState.todos.length) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
        <div>
          <table>
            <tbody>
              {this.state.todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "v" : "x"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
