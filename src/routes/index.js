const { Router } = require("express");
const router = Router();
const mysql = require("mysql2");

//Create MySQL conexion
const db = mysql.createConnection({
  host: "fdb1028.awardspace.net",
  //port: "3306",
  user: "4633478_pi10",
  password: "G32T2Nf]6&]?YBu",
  database: "4633478_pi10",
  //
  // host: "localhost",
  // user: "root",
  // database: "4633478_pi10",
  //
  // host: "srv1100.hstgr.io",
  // user: "u815170294_test_user",
  // password: "s1*S=nN#",
  // database: "u815170294_test_db",
});
db.connect((error) => {
  if (error) {
    console.log("error_db: " + error);
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
  console.log(db);
  let sql = "SELECT * FROM usuarios";
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

//POST
router.post("/postSQL", (req, res) => {
  console.log("hola");
  //let post = { usuario: "usuarioX", pass: 12123 }; //Valores de testeo, se sustituyen por el contenido del POST
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
