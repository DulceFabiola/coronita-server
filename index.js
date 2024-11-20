//1.IMPORTACIONES
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

//2.MIDDLEWARES
//Base de datos
connectDB();
app.use(cors());

//Todas las peticiones y respuestas se manejan en protocolo JSON
app.use(express.json());
app.use(express.static("public"));
//3.RUTAS
app.use("/products", require("./routes/products"));

//4.SERVER
app.listen(process.env.PORT, () => {
  console.log(`Servidor trabajando en http://localhost:${process.env.PORT}`);
});
