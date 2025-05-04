const { Router } = require("express");
const { default: OpenAI } = require("openai");
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
  res.send(`${req.body.nombre} , jesucristo murio por tus pecados`);
  //req.body = "test de request body";
  //res.redirect("http://127.0.0.1:5500/frondend/index.html");
  // res.json({
  //   id: "dinerico",
  //   nombre: req.body.nombre,
  //   apellidos: req.body.apellidos,
  //   numero_tarjeta: req.body.numero_tarjeta,
  //   fecha_caducidad: req.body.fecha_caducidad,
  //   cvv: req.body.cvv,
  // });
  console.log(req.body);
  console.log(req.body.nombre);
  console.log(req.body.apellidos);
  console.log(req.body.numero_tarjeta);
  console.log(req.body.fecha_caducidad);
  console.log(req.body.cvv);
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

router.post("/rutaPOST_GTP", (req, res) => {
  const openai = new OpenAI({
    apiKey:
      "sk-projA01YLls1WCQ9_zTQpirVf8JHV24oD4EADNwpJI1KEmshxdrTabLbqotlxCyQhOqVziN0RsIuvkT3BlbkFJZg5WK-tmO1eWreICHLizooH85-LR8O9LmJycPI8Fn9NffWFIEfJsp75ecfy5VAejNKk_f8NT4A",
  });
  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "developer",
        content: "Pregunta" + req.body.pregunta,
      },
    ],
  });
  completion.then((result) => {
    res.send(result.choices[0]);
  });
});

module.exports = router;
