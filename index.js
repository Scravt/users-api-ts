require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente 🚀" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
