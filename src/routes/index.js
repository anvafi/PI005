const { Router } = require("express");
const { default: OpenAI } = require("openai");
const router = Router();
const mysql = require("mysql");

router.get("/", (req, res) => {
  console.log("estan dentro");
  res.send("hola");
});
router.get("/getSQL", (req, res) => {
  console.log(db);
  let sql = "SELECT * FROM usuario";
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});
// router.get("/ruta", (req, res) => {
//   console.log("estan en ruta y tienen hambre");
//   res.send("¿en serio?");
// });
// router.get("/ruta/ruta", (req, res) => {
//   console.log("estan en descifrando el código");
//   res.send("tengo ganas de fumar :(");
// });
// router.get("/ruta/ruta/ruta", (req, res) => {
//   console.log("penetrando");
//   res.send("abre una botella de vino");
// });
// router.get("/ruta/ruta/ruta/ruta", (req, res) => {
//   console.log("fondo");
//   res.json("lleison");
// });
router.post("/rutaPOST", (req, res) => {
  console.log("acceso a POST");
  res.send(`${req.body.nombre} , jesucristo murio por tus pecados`);
});
router.post("/postSQL", (req, res) => {
  let post = req.body;
  let sql =
    "INSERT INTO `usuario` (`usuario`, `pass`) VALUES ('" +
    req.body.usuario +
    "', '" +
    req.body.pass +
    "')";
  let query = db.query(sql, post, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
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
// console.log(req.body);
// console.log(req.body.nombre);
// console.log(req.body.apellidos);
// console.log(req.body.numero_tarjeta);
// console.log(req.body.fecha_caducidad);
// console.log(req.body.cvv);
//});
// router.post("/rutaPOST/rutaPOST", (req, res) => {
//   console.log("acceso a POST");
//   res.send("hola, respuesta 2");
//   req.body = "test de request body";
// });
// router.post("/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
//   console.log("acceso a POST");
//   res.send("hola, respuesta 3");
//   req.body = "test de request body";
// });
// router.post("/rutaPOST/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
//   console.log("acceso a POST");
//   res.send("hola, respuesta 4");
//   req.body = "test de request body";
// });
// router.post("/rutaPOST/rutaPOST/rutaPOST/rutaPOST/rutaPOST", (req, res) => {
//   console.log("acceso a POST");
//   res.send("hola, respuesta 5");
//   req.body = "test de request body";
// });

router.post("/rutaPOST_GPT", (req, res) => {
  const openai = new OpenAI({
    apiKey:
      "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",
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

const db = mysql.createConnection({
  host: "fdb1028.awardspace.net",
  user: "4633478_pi10",
  password: "G32T2Nf]6&]?YBu",
  database: "4633478_pi10",
});
db.connect((error) => {
  if (error) {
    console.log("error" + error);
  } else {
    console.log("conexión establecida");
  }
});

module.exports = router;
