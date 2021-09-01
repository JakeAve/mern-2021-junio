import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import { UserProvider } from "./providers/UserProvider";
import Nav from "./components/Nav";
import { AlertProvider } from "./providers/AlertsProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <AlertProvider>
          <Nav />
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
        </AlertProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
