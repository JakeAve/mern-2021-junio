import { useParams } from "@reach/router";
import React from "react";

const PalabraConColores = (props) => {
  const { palabra, color, fondo } = useParams();
  return (
    <div>
      <h1 style={{ color, backgroundColor: fondo }}>{palabra}</h1>
    </div>
  );
};

export default PalabraConColores;
