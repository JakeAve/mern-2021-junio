import { Fragment, useState } from "react";
import "./App.css";
import Tempuratura from "./components/Tempuratura";

function App() {
  const [temp, setTemp] = useState(0);

  return (
    <>
      <h1>Leventar Estado</h1>
      <Tempuratura unidad="c" cantidad={temp} cambiarTemp={setTemp} />
      <Tempuratura unidad="f" cantidad={temp} />
      <Tempuratura unidad="k" cantidad={temp} />
    </>
  );
}

export default App;
