import React from "react";
import { useRouteMatch } from "react-router-dom";

const PalabraConUseMatch = () => {
  const {
    params: { palabra, color, fondo },
  } = useRouteMatch();

  return (
    <div>
      <h1 style={{ color, backgroundColor: fondo }}>{palabra}</h1>
    </div>
  );
};

export default PalabraConUseMatch;
