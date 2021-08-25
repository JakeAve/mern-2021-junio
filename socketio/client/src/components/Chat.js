import React, { useEffect, useState } from "react";
import { useSocket } from "../providers/SocketProvider";
import Mensaje from "./Mensaje";

const Chat = (props) => {
  const { nombre } = props;
  const socket = useSocket();
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const setNuevoMensaje = (nuevaCosa) =>
    setMensajes((ms) => [...ms, nuevaCosa]);

  const enviarMensage = (e) => {
    e.preventDefault();
    const hora = new Date().toISOString();
    socket.emit("msj-a-s", mensaje, nombre, hora);
    setNuevoMensaje({ mensaje, nombre, hora });
    setMensaje("");
  };

  useEffect(() => {
    socket.emit("nuevo-usuario-s", nombre);
    socket.emit("da-me-mensajes");
    socket.on("todo-mensaje", (ms) => setMensajes(ms));
    socket.on("msj-a-c", (msj) => setNuevoMensaje(msj));
    socket.on("nuevo-usuario-c", (n) =>
      setNuevoMensaje({ aviso: `${n} se ha ingresado en el chat` })
    );
    socket.on("usuario-salida", (n) =>
      setNuevoMensaje({ aviso: `${n} ha salido del chat` })
    );
    socket.on("nuevo-dato", () => window.alert("Nuevo Dato"));
  }, [socket, nombre]);

  return (
    <div>
      {mensajes.map((m, i) => (
        <Mensaje key={i} {...m} propio={nombre === m.nombre} />
      ))}
      <form onSubmit={enviarMensage}>
        <input value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
