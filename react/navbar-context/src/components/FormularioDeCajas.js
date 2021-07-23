import React from "react";

const FormularioDeCajas = (props) => {
  const { crearNuevaCaja } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {};
    for (const [key, val] of formData.entries()) payload[key] = val;
    if (payload["color"].trim() === "")
      return alert("Tienes que entrar un color!");

    // éxito
    crearNuevaCaja(payload);
    form
      .querySelectorAll('input:not([type="submit"])')
      .forEach((input, index) => {
        input.value = "";
        if (index === 0) input.focus();
      });
  };

  return (
    <form onSubmit={onSubmit} className="formulario-de-color">
      <label htmlFor="color-texto">Color</label>
      <input
        id="color-texto"
        type="text"
        name="color"
        placeholder="Entra un color"
      />
      <label htmlFor="tamaño">Tamaño</label>
      <input id="tamaño" name="tamaño" type="number" placeholder="42" />
      <input type="submit" value="Añadir" />
    </form>
  );
};

export default FormularioDeCajas;
