import React, { useState } from "react";

const NombreFormulario = (props) => {
  const { setNombre } = props;
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNombre(inputVal);
        }}
      >
        <label>
          Enter you name here{" "}
          <input
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
          />
        </label>
        <button>Listo!</button>
      </form>
    </div>
  );
};

export default NombreFormulario;
