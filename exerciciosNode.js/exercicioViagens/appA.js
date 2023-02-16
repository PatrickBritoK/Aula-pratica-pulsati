const express = require("express");
const empresasAereas = require("./empresaAereas").empresasAereas;
const app = express();
app.use(express.json());
const { salvarArquivo, lerArquivo, deletarArquivo } = require("./arquivo");

const empresaList = [];
let proximoCodigo = 1;

app.post("/empresas", (req, res) => {
  const { nome, sede } = req.body;
  const Empresa = new empresasAereas(proximoCodigo, nome, sede);
  proximoCodigo = proximoCodigo + 1;
  empresaList.push(Empresa);
  salvarArquivo(`${Empresa.codigo}.json`,JSON.stringify(Empresa))
  res.json(Empresa);
});

app.get("/empresas", (req, res) => {
  res.json(empresaList);
});

app.get("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const empresaAtual = empresaList.find(
    (empresaAtual) => empresaAtual.codigo == codigo
  );
  res.json(empresaAtual);
});

app.put("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const empresa = empresaList.find(
    (empresaAtual) => empresaAtual.codigo == codigo
  );
  const { nome, sede } = req.body;
  empresa.nome = nome;
  empresa.sede = sede;
  res.json(empresa);
});

app.delete("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  let posicao;
  empresaList.forEach((empresa, index) => {
    if ((empresa.codigo = codigo)) {
      posicao = index;
    }
  });
  delete empresaList[posicao];
  res.json({ data: "foi de F" });
});

app.listen(8000);
