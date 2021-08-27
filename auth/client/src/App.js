import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
              <Link to="/login"> Login</Link>
              <Link to="/register"> Register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
