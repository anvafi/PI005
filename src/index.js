const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.use(morgan("dev"));
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//super rutas aquí
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log(`hola desde el puerto: ${app.get("port")}`);
});
