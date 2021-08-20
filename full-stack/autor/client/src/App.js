import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import New from "./views/New";
import Edit from "./views/Edit";

const App = () => {
  return (
    <Router>
      <h1>Favorite Authors</h1>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/:id">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
