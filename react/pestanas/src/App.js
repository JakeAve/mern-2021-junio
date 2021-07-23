import "./App.css";
import Pestañas from "./components/Pestañas";

const infoDeBaseDeDatos = [
  { heading: "Contenido 1", info: "contenido importante" },
  { heading: "Contenido 2", info: "contenido importante" },
  { heading: "Contenido 3", info: "contenido importante" },
];

function App() {
  return (
    <div>
      <Pestañas tabs={infoDeBaseDeDatos} />
    </div>
  );
}

export default App;
