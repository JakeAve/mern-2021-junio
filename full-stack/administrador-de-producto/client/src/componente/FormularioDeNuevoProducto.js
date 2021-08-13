import React from "react";
import crearNuevoProducto from "../actions/crearNuevoProducto";

const FormularioDeNuevoProducto = (props) => {
  const { onIngresar } = props;
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const obj = {};
    for (const [campo, val] of formData.entries()) obj[campo] = val;

    const { success, message } = await crearNuevoProducto(obj);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se ingresó el producto exitosamente");
      onIngresar();
    } else {
      window.alert(`No se ingresó. ${message}`);
    }
  };

  return (
    <form className="formulario-de-nuevo-producto" onSubmit={onSubmit}>
      <label htmlFor="título">Título</label>
      <input type="text" id="título" name="título" />
      <label htmlFor="precio">Precio</label>
      <input type="number" id="precio" name="precio" />
      <label htmlFor="descripción">Descripción</label>
      <input type="text" id="descripción" name="descripción" />
      <input type="submit" value="Subir" />
    </form>
  );
};

export default FormularioDeNuevoProducto;
