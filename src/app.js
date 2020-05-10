const express = require("express");
const colores = require("colors");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const body_parser = require('body-parser')
const app = express();
//conexion de la base de datos ========================
const uri="yourConnection of atlas"
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(conectado => console.log("se conecto"))
    .catch(err => console.log(err));

// importing routes
const indexRoutes = require("./routes/index");

// settings
app.set("port", 3033);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json())
    // routes
app.use("/", indexRoutes);

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});