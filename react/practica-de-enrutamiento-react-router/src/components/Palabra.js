import React from "react";

const Palabra = (props) => {
  const {
    match: {
      params: { palabra },
    },
  } = props;
  return (
    <div>
      <h1>{palabra}</h1>
    </div>
  );
};

export default Palabra;
