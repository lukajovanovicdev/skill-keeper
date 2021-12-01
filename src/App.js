import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import Task from "./pages/Task";
import Skills from "./pages/Skills";

function App() {
// TODO Generalno evo primera strukture foldera kojom se mozete voditi: https://medium.com/@kolbysisk/react-folder-structure-for-enterprise-level-applications-f8384eff162b

  return (

    // TODO Header izdvojiti u posebnu komponentu
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

     {/* TODO Rute izdvojiti u poseban fajl */}
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="users" element={<Users />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
