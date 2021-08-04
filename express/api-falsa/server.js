const express = require("express");

const PORT = 5000;
const app = express();

app.use(express.json());

const randomMiddleware = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  req.userAgent = userAgent;
  next();
};

app.use("/api", randomMiddleware, require("./api"));

app.listen(PORT, () => console.log(`El servidor está en PORT: ${PORT}`));
