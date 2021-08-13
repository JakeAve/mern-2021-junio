import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import editarProducto from "../actions/editarProducto";
import eliminarProducto from "../actions/eliminarProducto";
import fetchProductoPorId from "../actions/fetchProductoPorId";

const EditarProducto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { productoID } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchProductoPorId(productoID).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [productoID]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const obj = {};
    for (const [campo, val] of formData.entries()) obj[campo] = val;

    const { success, message } = await editarProducto(productoID, obj);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se actualizó el producto exitosamente");
      history.push("/");
    } else {
      window.alert(`No se pudo actualizar. ${message}`);
    }
  };

  const eliminar = async () => {
    await eliminarProducto(productoID);
    window.alert(`Se eliminó el producto exitosamente`);
    history.push("/");
  };

  if (!productoProps && doesExist) return <h1>Espera...</h1>;
  else if (!doesExist) return <h1>No existe</h1>;

  return (
    <div>
      <form className="formulario-de-nuevo-producto" onSubmit={onSubmit}>
        <label htmlFor="título">Título</label>
        <input
          type="text"
          id="título"
          name="título"
          defaultValue={productoProps.título}
        />
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          name="precio"
          defaultValue={productoProps.precio}
        />
        <label htmlFor="descripción">Descripción</label>
        <input
          type="text"
          id="descripción"
          name="descripción"
          defaultValue={productoProps.descripción}
        />
        <input type="submit" value="Editar" />
      </form>
      <button className="eliminar btn-grande" onClick={eliminar}>
        Eliminar Producto
      </button>
    </div>
  );
};

export default EditarProducto;
