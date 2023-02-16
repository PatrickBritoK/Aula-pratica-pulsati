const express = require("express");
const aeroporto = require("./aeroporto").aeroporto;
const app = express();
app.use(express.json());

const aeroportoList = [];
let proximoCodigo = 1;

app.post("/aeroporto", (req, res) => {
  const { nome, codigoAeroporto, endereco } = req.body;
  const Aeroporto = new aeroporto(
    proximoCodigo,
    nome,
    codigoAeroporto,
    endereco
  );
  proximoCodigo = proximoCodigo + 1;
  aeroportoList.push(Aeroporto);
  res.json(Aeroporto);
});

app.get("/aeroporto", (req, res) => {
  res.json(aeroportoList);
});

app.get("/aeroporto/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const aeroportoAtual = aeroportoList.find(
    (aeroportoAtual) => aeroportoAtual.codigo == codigo
  );
  res.json(aeroportoAtual);
});

app.put("/aeroporto/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = aeroportoList.find(
    (aeroportoAtual) => aeroportoAtual.codigo == codigo
  );
  const { nome, codigoAeroporto, endereco } = req.body;
  aeroporto.nome = nome;
  aeroporto.codigoAeroporto = codigoAeroporto;
  aeroporto.endereco = endereco;
  res.json(aeroporto);
});

app.delete("/aeroporto/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  let posicao;
  aeroportoList.forEach((aeroporto, index) => {
    if (aeroporto.codigo == codigo) {
      posicao = index;
    }
  });
  delete aeroportoList[posicao];
  res.json({ data: "foi de F" });
});

app.listen(8000);
