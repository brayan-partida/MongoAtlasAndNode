const express = require("express");
const router = express.Router();
const admin = express();
const Task = require("../models/task");
const body_parser=require('body-parser')

router.get("/", async (req, res) => {
  const usuarios = await Task.find();

  console.log(usuarios);
  res.json(usuarios);
  res.end();
  //console.dir(admin.mountpath)//investigar bien======?
  //res.render("index");
  //res.send("se esta visualizando")
}); //tomar todos los valores--------------------------

//router.use("/",admin);
router.post("/add", async (req, res) => {
  const tareas = new Task(req.body);
  await tareas.save();

  res.send("recibido el dato");
});
//localhost:3000/id/:nocn

router.get("/:Nombre", async (req, res, next) => {
  const { Nombre } = req.params;
  const tareas = await Task.find({ Nombre: req.params.Nombre });
  console.log(tareas);
  res.json(tareas);

  res.send("se visualizo la busqueda");
});

router.delete("/:users", async (req, res, next) => {
  const { users } = req.params;
  const tareas = await Tasks.remove({users: req.params.users });
  console.log(tareas);
  res.send("elimino un documentos");
});

router.put("/:Nombre", async (req, res) => {
  const { Nombre } = req.params;
  const tareas = await Task.findById;
  console.log(tareas);
  res.send("actualizado");
});

module.exports = router;
