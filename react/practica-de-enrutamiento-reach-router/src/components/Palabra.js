import { useParams } from "@reach/router";
import React from "react";

const Palabra = (props) => {
  const params = useParams();
  return (
    <div>
      <h1>{params.palabra}</h1>
    </div>
  );
};

export default Palabra;
