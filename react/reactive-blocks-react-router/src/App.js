import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Alpha from "./views/Alpha";
import Beta from "./views/Beta";
import Advertisement from "./components/Advertisement";
// import Navigation from "./components/Navigation";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/alpha">
          <Advertisement />
          <Alpha />
        </Route>
        <Route path="/beta" component={Beta} />
        <Route>
          <h1>404 No se encuentra la página</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
