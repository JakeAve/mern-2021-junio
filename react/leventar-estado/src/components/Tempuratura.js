import React, { useEffect, useState } from "react";

const Tempuratura = (props) => {
  const { unidad, cantidad, cambiarTemp } = props;

  const [valor, setValorDeInput] = useState(cantidad);

  useEffect(() => {
    switch (unidad) {
      case "f":
        setValorDeInput(cantidad * (9 / 5) + 32);
        break;
      case "c":
        setValorDeInput(cantidad);
        break;
      case "k":
        setValorDeInput(cantidad + 270);
        break;
      default:
        return;
    }
  }, [unidad, cantidad]);

  const onChange = (e) => {
    const num = Number(e.target.value);
    cambiarTemp(num);
  };

  return (
    <form>
      <label>Unidad: {unidad}</label>
      <input value={valor} onChange={onChange} />
    </form>
  );
};

export default Tempuratura;
