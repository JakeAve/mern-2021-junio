import React, { useEffect, useState } from "react";
import fetchProductos from "../actions/fetchProductos";

const ListaDeProductos = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchProductos().then(({ data }) => {
      const elementos = data.map(({ título, _id }) => (
        <li key={_id}>{título}</li>
      ));
      setLista(elementos);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>{lista}</ul>
    </div>
  );
};

export default ListaDeProductos;
