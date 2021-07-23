import React, { useState } from "react";
import { useUsuarioContext } from "../contexts/userContext";

const CambiarNombre = () => {
  const { nombre, cambiarNombre } = useUsuarioContext();

  const [nuevoNombre, setNuevoNombre] = useState(nombre);

  const onSubmit = (e) => {
    e.preventDefault();
    if (nuevoNombre.trim().length > 2) {
      cambiarNombre(nuevoNombre);
    } else window.alert("Ese nombre no es válido");
  };

  return (
    <form onSubmit={onSubmit} className="formulario-de-color">
      <label htmlFor="nombre">Usuario</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        placeholder={nombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
        value={nuevoNombre}
      />
      <input type="submit" value="Cambiar" />
    </form>
  );
};

export default CambiarNombre;
