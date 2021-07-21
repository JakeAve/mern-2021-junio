import React from "react";

const ErrorDeFormulario = (props) => {
  const { mensaje, name } = props;
  return (
    <div className="form-error" input-name={name}>
      {mensaje}
    </div>
  );
};

export default ErrorDeFormulario;
