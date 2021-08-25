import React, { useState } from "react";
import Chat from "./Chat";
import NombreFormulario from "./NombreFormulario";

const ChatWrapper = () => {
  const [nombre, setNombre] = useState("");

  if (!nombre) return <NombreFormulario setNombre={setNombre} />;
  return <Chat nombre={nombre} />;
};

export default ChatWrapper;
