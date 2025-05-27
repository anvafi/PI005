const { Router } = require("express");
const router = Router();
const mysql = require("mysql2");

//Create MySQL conexion
const db = mysql.createConnection({
  host: "fdb1028.awardspace.net",
  user: "4633478_pi10",
  password: "G32T2Nf]6&]?YBu",
  database: "4633478_pi10",
});
db.connect((error) => {
  if (error) {
    console.log("error: " + error);
  } else {
    console.log("conexion establecida");
  }
});

//GET
router.get("/", (req, res) => {
  res.send("hola desde SQLLandia");
});

//GET
router.get("/getSQL", (req, res) => {
  // console.log(db);
  let sql = "SELECT * FROM usuarios";
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

//POST
router.post("/postSQL", (req, res) => {
  console.log("hola");
  // let post = { usuario: "usuarioNODE", pass: 54321 }; //Valores de testeo, se sustituyen por el contenido del POST
  let post = req.body;
  let sql =
    "INSERT INTO `usuarios` (`usuario`, `pass`) VALUES ('" +
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

module.exports = router;
