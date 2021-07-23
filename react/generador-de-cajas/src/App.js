import { useState } from "react";
import "./App.css";
import Caja from "./components/Caja";
import FormularioDeCajas from "./components/FormularioDeCajas";
import PadreDeCajas from "./components/PadreDeCajas";

function App() {
  const [colores, setColores] = useState([]);

  const crearNuevaCaja = (caja) => {
    setColores((cs) => [caja, ...cs]);
  };

  const cajas = colores.map((caja, i) => <Caja key={i} {...caja} />);

  return (
    <div>
      <FormularioDeCajas crearNuevaCaja={crearNuevaCaja} />
      <PadreDeCajas>{cajas}</PadreDeCajas>
    </div>
  );
}

export default App;
