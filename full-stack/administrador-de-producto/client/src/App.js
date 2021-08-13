import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import Producto from "./componente/Producto";
import EditarProducto from "./componente/EditarProducto";
import Home from "./views/Home";

const App = () => {
  return (
    <Router>
      <Link to="/" className="home-link">
        Home
      </Link>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:productoID/editar">
          <EditarProducto />
        </Route>
        <Route path="/:productoID">
          <Producto />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
