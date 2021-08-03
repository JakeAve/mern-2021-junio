import "./App.css";
import { Router } from "@reach/router";
import NumberComponent from "./components/Number";
import Palabra from "./components/Palabra";
import PalabraConColores from "./components/PalabraConColores";
import PalabraConUseMatch from "./components/PalabraConUseMatch";

function App() {
  return (
    <Router>
      <NumberComponent path="/:numero" />
      <Palabra path="/:palabra" />
      <PalabraConColores path="/:palabra/:color/:fondo" />
      <PalabraConUseMatch path="gancho/:palabra/:color/:fondo" />
    </Router>
  );
}

export default App;
