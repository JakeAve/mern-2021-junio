const express = require("express");

const app = express();

const PORT = 5000;

const server = app.listen(PORT, () =>
  console.log(`El servidor está iniciado en ${PORT}`)
);

const io = require("socket.io")(server, { cors: true });
io.on("connection", require("./socket-server"));

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api", require("./api"));
