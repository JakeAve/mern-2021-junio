# Lista

## Server

En un terminal en el root de todo el proyecto

```
mkdir server
cd server
npm init -y
npm i express dotenv mongoose
npm i nodemon -D
```

los scripts de package.json deben ser así

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server",
    "start": "node server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.13.6"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
```

Crear .env

```
PORT=5000
DB_CONNECTION=mongodb+srv://<user>:<password>@cluster0.u1jp0.mongodb.net/<database>?retryWrites=true&w=majority
NODE_ENV=develop
```

Crear server.js

```javascript
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;

require("./config/connectToDB")();

const app = express();

app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`1/2 El servidor está en PORT: ${PORT}`));
```

Crear config/connectToDB.js

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("2/2 Conectado a Mongo");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

Crear routes/api.js

```javascript
const { Router } = require("express");

const router = Router();

router.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

module.exports = router;
```

Probar que funcione

```
npm run dev
```

## Client

En el root de todo el proyecto

```
npx create-react-app client
cd client
rm -rf src
mkdir src
```

Crear index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Crear App.js

```javascript
import React from "react";
import "./App.css";

const App = () => {
  return <></>;
};

export default App;
```

Crear App.css

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

Ajustar el proxy en el package.json

```json
  "proxy": "http://localhost:5000"
```

Editar el App.js para averiguar que la conección esté bien

```javascript
import React, { useEffect, useState } from "react";
import "./normalize.css";
import "./App.css";

const App = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2>
    </>
  );
};

export default App;
```

Conprobar que no haya errores

```
npm start
```
