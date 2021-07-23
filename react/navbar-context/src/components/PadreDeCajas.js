import React from "react";
import { useUsuarioContext } from "../contexts/userContext";

const PadreDeCajas = (props) => {
  const { children } = props;
  const { nombre, direccion } = useUsuarioContext();
  return (
    <div className="padre-de-cajas">
      <h1>
        Cajas de {nombre} quien vive en {direccion}
      </h1>
      {children}
    </div>
  );
};

export default PadreDeCajas;
