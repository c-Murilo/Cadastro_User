const { DataTypes } = require("sequelize");
const db = require("../db/conn.js");

const user = db.define("user", {
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  cpf: {
    type: DataTypes.STRING,
    required: true,
  },
  endereco: {
    type: DataTypes.STRING,
    required:true
  }
});
module.exports = user
