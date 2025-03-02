const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("estan dentro");
  res.send("hola");
});
router.get("/ruta", (req, res) => {
  console.log("estan en ruta y tienen hambre");
  res.send("¿en serio?");
});
router.get("/ruta/ruta", (req, res) => {
  console.log("estan en descifrando el código");
  res.send("tengo ganas de fumar :(");
});
router.get("/ruta/ruta/ruta", (req, res) => {
  console.log("penetrando");
  res.send("abre una botella de vino");
});
router.get("/ruta/ruta/ruta/ruta", (req, res) => {
  console.log("fondo");
  res.json("lleison");
});
router.post("/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send("hola, respuesta");
  req.body = "test de request body";
});
router.post("/rutaPOST/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send("hola, respuesta 2");
  req.body = "test de request body";
});
router.post("/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send("hola, respuesta 3");
  req.body = "test de request body";
});
router.post("/rutaPOST/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send("hola, respuesta 4");
  req.body = "test de request body";
});
router.post("/rutaPOST/rutaPOST/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send("hola, respuesta 5");
  req.body = "test de request body";
});

module.exports = router;
