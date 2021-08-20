import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import RayaDeAutor from "../components/RayaDeAutor";

const Inicio = () => {
  const [autores, setAutores] = useState([]);
  useEffect(() => {
    fetch("/api/autor")
      .then((res) => res.json())
      .then((as) => setAutores(as))
      .catch(() => setAutores([]));
  }, []);

  const rayasDeAutores = autores.map((propsDeAutor) => (
    <RayaDeAutor key={propsDeAutor._id} {...propsDeAutor} />
  ));
  return (
    <>
      <Nav />
      <table>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{rayasDeAutores}</tbody>
      </table>
    </>
  );
};

export default Inicio;
