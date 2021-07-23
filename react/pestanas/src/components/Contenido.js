import React from "react";

const Contenido = (props) => {
  const { isSelected, heading, children } = props;
  return (
    <section className={"contenido" + (isSelected ? " selected" : "")}>
      <h1>{heading}</h1>
      {children}
    </section>
  );
};

export default Contenido;
