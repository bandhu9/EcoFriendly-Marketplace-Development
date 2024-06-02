const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
require("./db");

app.use(express.json());
app.use("/api", productRoutes);

module.exports = app;
