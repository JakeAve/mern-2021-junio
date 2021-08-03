import "./App.css";
import { Router } from "@reach/router";
import NumberComponent from "./components/Number";
import Palabra from "./components/Palabra";
import PalabraConColores from "./components/PalabraConColores";
import PalabraConUseMatch from "./components/PalabraConUseMatch";
import { useReducer } from "react";

const initialCount = 0;

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.valor };
    case "decrement":
      return { count: state.count - action.valor };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <Router>
        <NumberComponent path="/:numero" />
        <Palabra path="/:palabra" />
        <PalabraConColores path="/:palabra/:color/:fondo" />
        <PalabraConUseMatch path="gancho/:palabra/:color/:fondo" />
      </Router>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement", valor: 37 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", valor: 101 })}>
        +
      </button>
    </>
  );
}

export default App;
