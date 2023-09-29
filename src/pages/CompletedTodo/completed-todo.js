import { useState, useEffect } from "react";
import Todo from "../../components/Todo/Todo";
function CompletedTodo() {
  const [completedTodos, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
      .then((response) => response.json())
      .then((res) => setTodo(res));
  }, []);

  function confirmModal(id) {
    setTodo(completedTodos.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1 className="todos">CompletedTodo</h1>

      <div className="todosBody">
        {completedTodos.map((todo) => (
          <Todo key={todo.id} data={todo} confirmModal={confirmModal} />
        ))}
      </div>
    </div>
  );
}
export default CompletedTodo;
