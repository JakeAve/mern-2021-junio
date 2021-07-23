import React from "react";

const Etiqueta = (props) => {
  const { isSelected, texto, index, setSeleccionado } = props;

  const onClick = () => {
    setSeleccionado(index);
  };

  return (
    <button
      className={"etiqueta" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Etiqueta;
