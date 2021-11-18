import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Task from "./pages/Task";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/">Task</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="users" element={<Users />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
