import { useState, useEffect } from "react";

export default function FetchData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 20)));
  });

  return (
    <>
      <div>
        <table>
          <tbody>
            {todos.map((todo, index) => (
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
