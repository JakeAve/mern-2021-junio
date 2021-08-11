import React from "react";
import "./normalize.css";
import "./App.css";
import FormularioDeNuevoProducto from "./componente/FormularioDeNuevoProducto";
import ListaDeProductos from "./componente/ListaDeProductos";

const App = () => {
  return (
    <>
      <h1>Administrador de Productos</h1>
      <FormularioDeNuevoProducto />
      <ListaDeProductos />
    </>
  );
};

export default App;
