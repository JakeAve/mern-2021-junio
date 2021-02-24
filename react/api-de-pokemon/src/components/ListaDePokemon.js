import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../actions/fetchPokemon";

const ListaDePokemon = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchPokemon().then((ls) => setLista(ls));
  }, []);

  const elementoDeLista = lista.map((poke, index) => (
    <li key={index}>{poke.name}</li>
  ));

  const contenido = lista.length ? elementoDeLista : "...";

  const onClick = async () => {
    const ls = await fetchPokemon();
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
