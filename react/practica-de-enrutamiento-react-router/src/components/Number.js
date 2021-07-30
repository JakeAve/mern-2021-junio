import React from "react";
import { Redirect } from "react-router-dom";

const NumberComponent = (props) => {
  const {
    match: {
      params: { numero },
    },
  } = props;

  const intiger = Number(numero);
  if (isNaN(intiger)) return <Redirect to={`/:${numero}`} />;
  return (
    <div>
      <h1>{numero}</h1>
    </div>
  );
};

export default NumberComponent;
