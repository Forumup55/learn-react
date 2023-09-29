import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CompletedTodo from "./pages/CompletedTodo/completed-todo";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/completed-todo" element={<CompletedTodo />} />
      </Routes>
    </div>
  );
}

export default App;
