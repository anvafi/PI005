const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log(`hola desde el puerto: ${app.get("port")}`);
});

//super rutas aquí
app.use(require("./routes/index"));
