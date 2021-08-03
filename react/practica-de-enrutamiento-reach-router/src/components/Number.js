import { Redirect, useParams } from "@reach/router";
import React from "react";

const NumberComponent = (props) => {
  const params = useParams();
  const numero = params.numero;
  const intiger = Number(numero);

  if (isNaN(intiger)) return <Redirect to="/:palabra" />;
  return (
    <div>
      Número
      <h1>{numero}</h1>
    </div>
  );
};

export default NumberComponent;
