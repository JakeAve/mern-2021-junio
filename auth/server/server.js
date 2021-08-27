require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

require("./config/connectDB")();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production")
  app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`1: El servidor está incendido en port ${port}`)
);
