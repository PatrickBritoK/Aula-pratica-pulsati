const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "oracle",
  database: "xe",
  username: "system",
  password: "pulsati2023",
  host: "192.168.0.50",
  port: 1521,
  dialectOptions: { connectTimeout: 30000 },
});
const { Model, DataTypes } = require("sequelize");
class Aeroporto extends Model {}
Aeroporto.init(
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "AEROPORTO_PATRICKS",
    timestamps: false,
  }
);
sequelize.sync();

const { salvarArquivo, lerArquivo, deletarArquivo } = require("./arquivo");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/aeroportoTodos", async (req, res) => {
  const aeroporto = await Aeroporto.findAll();
  res.json(aeroporto);
});

app.post("/aeroporto", async (req, res) => {
  const { nome, endereco } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  aeroporto.endereco = endereco;
  salvarArquivo(`${aeroporto.codigo}.json`,JSON.stringify(aeroporto)) //procurar um jeito melhor de fazer.
  await aeroporto.save();
  res.json(aeroporto);
});

app.get("/aeroporto/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
});

app.put("/aeroporto/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome, endereco } = req.body;
  aeroporto.nome = nome;
  aeroporto.endereco = endereco;
  await aeroporto.save();
  res.json(aeroporto);
});

app.delete("/aeroporto/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: "FOI DE CAIXA" });
});

app.listen(8000);
