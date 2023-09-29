import React, { useState, useEffect } from "react";
import Todo from "../components/Todo/Todo";

function Home() {
  const [todosData, setTodoData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) => setTodoData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function confirmModal(id) {
    setTodoData(todosData.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1 className="todos">All Todos</h1>

      <div className="todosBody">
        {todosData.map((todo) => (
          <Todo key={todo.id} data={todo} confirmModal={confirmModal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
