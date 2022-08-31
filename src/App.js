import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./components/Home";
import Launch from "./components/Launch";
import LaunchIndex from "./components/LaunchIndex";
import LaunchShoe from "./components/LaunchShoe";

export default function App() {
  return (
    <Router>
      <nav>
        <button>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </button>
        <button>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to="/Launch"
          >
            {" "}
            Launch
          </NavLink>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route index element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
