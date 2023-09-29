import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="container">
      <h1>Todos</h1>

      <div className="links">
        <ul>
          <li>
            <Link to="/">All todos</Link>
          </li>

          <li>
            <Link to="/completed-todo">Completed Todos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
