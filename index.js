const express = require("express");
const exphbs = require("express-handlebars");
const con = require("./db/conn.js");
const User = require("./models/user");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

app.use("/users", userRoutes);
con
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Esta rodando na porta: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });