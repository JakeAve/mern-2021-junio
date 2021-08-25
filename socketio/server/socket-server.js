const mensajes = [
  { nombre: "Jake", mensaje: "hello", hora: new Date().toISOString() },
];

module.exports = (socket) => {
  console.log(`handshake ${socket.id}`);
  socket.emit("log", "conección establecida");

  let usuario;

  socket.on("nuevo-usuario-s", (nombre) => {
    usuario = nombre;
    socket.broadcast.emit("nuevo-usuario-c", nombre);
  });

  socket.on("da-me-mensajes", () => {
    console.log({ mensajes });
    socket.emit("todo-mensaje", mensajes);
  });

  socket.on("msj-a-s", (mensaje, usuario, hora) => {
    const obj = { mensaje, nombre: usuario, hora };
    mensajes.push(obj);
    socket.broadcast.emit("msj-a-c", obj);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("usuario-salida", usuario);
  });
};
