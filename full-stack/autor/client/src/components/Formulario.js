import React, { useState } from "react";

const Formulario = (props) => {
  const { onSubmit = () => {}, onError = () => {} } = props;
  const [nombre, setNombre] = useState("");

  const _onSubmit = async (e) => {
    try {
      e.preventDefault();
      onSubmit(nombre);
    } catch {
      onError();
    }
  };

  return (
    <form onSubmit={_onSubmit}>
      <label>
        Autor
        <input onChange={(e) => setNombre(e.target.value)} value={nombre} />
      </label>
      <button type="reset">Cancelar</button>
      <button type="button">Ok</button>
    </form>
  );
};

export default Formulario;
