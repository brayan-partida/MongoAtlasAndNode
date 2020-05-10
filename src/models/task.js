


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usauriosSchema = new Schema({
    users:String,
    email:String,
    password:String
   })

module.exports = mongoose.model('usuarios', usauriosSchema);





/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  Nombre: String,
  Email: String,
  Cel: String
});

module.exports = mongoose.model("tasks", TaskSchema);*/
