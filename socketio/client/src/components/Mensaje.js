import React from "react";

const Mensaje = (props) => {
  const { mensaje, nombre, hora, propio = "", aviso } = props;
  if (aviso) return <div className="aviso">{aviso}</div>;
  return (
    <div className={`mensaje ${propio && "propio"}`}>
      <p>{mensaje}</p>
      <p className="nombre">- {nombre}</p>
      <p className="hora">{new Date(hora).toLocaleTimeString()}</p>
    </div>
  );
};

export default Mensaje;
