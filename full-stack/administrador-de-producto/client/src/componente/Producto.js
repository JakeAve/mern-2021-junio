import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchProductoPorId from "../actions/fetchProductoPorId";

const Producto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { productoID } = useParams();

  useEffect(() => {
    fetchProductoPorId(productoID).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [productoID]);

  if (!productoProps && doesExist) return <h1>Espera...</h1>;
  else if (!doesExist) return <h1>No existe</h1>;
  else
    return (
      <div className="vista-de-producto">
        <h1>{productoProps.título}</h1>
        <p>{productoProps.precio}</p>
        <p>{productoProps.descripción}</p>
        <Link to={`/${productoProps._id}/editar`}>Editar</Link>
      </div>
    );
};

export default Producto;
