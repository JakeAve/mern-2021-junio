import { useState } from "react";
import "./App.css";
import Caja from "./components/Caja";
import CambiarNombre from "./components/CambiarNombre";
import FormularioDeCajas from "./components/FormularioDeCajas";
import Navbar from "./components/Navbar";
import PadreDeCajas from "./components/PadreDeCajas";
import { UsuarioProvider } from "./contexts/userContext";

function App() {
  const [colores, setColores] = useState([]);

  const crearNuevaCaja = (caja) => {
    setColores((cs) => [caja, ...cs]);
  };

  const cajas = colores.map((caja, i) => <Caja key={i} {...caja} />);

  return (
    <>
      <UsuarioProvider>
        <Navbar />
        <div>
          <FormularioDeCajas crearNuevaCaja={crearNuevaCaja} />
          <PadreDeCajas>{cajas}</PadreDeCajas>
        </div>
        <CambiarNombre />
      </UsuarioProvider>
    </>
  );
}

export default App;
