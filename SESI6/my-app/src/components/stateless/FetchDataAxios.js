import { useState, useEffect } from "react";
import Fetchs from "../../services/Fetchs";

export default function FetchDataAxios() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Fetchs.getData("/todos")
      .then((data) => setTodos(data.data.slice(0,10)));
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
