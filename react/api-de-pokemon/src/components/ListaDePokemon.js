import React, { useEffect, useState } from "react";
// import fetchData from "../actions/axiosPokemon";
import fetchData from "../actions/fetchPokemon";

const ListaDePokemon = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchData().then((ls) => setLista(ls));
  }, []);

  const elementoDeLista = lista.map((poke, index) => (
    <li key={index}>{poke.name}</li>
  ));

  const contenido = lista.length ? elementoDeLista : "...";

  const onClick = async () => {
    const ls = await fetchData();
    setLista(ls);
  };

  return (
    <div className="lista-de-pokemon">
      <button onClick={onClick}>Fetch Pokemon</button>
      <ul>{contenido}</ul>
    </div>
  );
};

export default ListaDePokemon;
