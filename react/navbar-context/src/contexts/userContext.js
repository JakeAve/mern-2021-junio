import { createContext, useContext, useState } from "react";

const usuarioContext = createContext({});

export const UsuarioProvider = (props) => {
  const { children } = props;

  const [nombre, cambiarNombre] = useState("Juan");
  const direccion = "122 Avenida Molina, Santiago CL";

  return (
    <usuarioContext.Provider value={{ nombre, cambiarNombre, direccion }}>
      {children}
    </usuarioContext.Provider>
  );
};

export const useUsuarioContext = () => useContext(usuarioContext);
