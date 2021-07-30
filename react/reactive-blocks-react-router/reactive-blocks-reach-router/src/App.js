import "./App.css";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Alpha from "./views/Alpha";
import Beta from "./views/Beta";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Alpha path="/alpha" />
      <Beta path="/beta" />
    </Router>
  );
}

export default App;
