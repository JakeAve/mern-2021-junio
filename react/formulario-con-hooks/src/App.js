import "./App.css";
import Register from "./components/Register";
import RegisterEstado from "./components/Registrar-Estado";

function App() {
  return (
    <div className="App">
      <h1>App Para Formulario con Ganchos</h1>
      <Register />
      <hr />
      <RegisterEstado />
    </div>
  );
}

export default App;
