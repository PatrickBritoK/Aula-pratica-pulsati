const express = require("express");
const Editora = require("./editora").Editora;
const livro = require("./livro");
const app = express();
app.use(express.json());

const editoraList = [];
let proximoCodigo = 1;

app.post("/editora", (req, res) => {
  const { nome, codigoEditora, edicao } = req.body;
  const editora = new Editora(proximoCodigo, nome, codigoEditora, edicao);
  proximoCodigo = proximoCodigo + 1;
  editoraList.push(editora);
  res.json(editora);
});

app.get("/editora/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const editoraAtual = editoraList.find(
    (editoraAtual) => editoraAtual.idEditora == codigo
  );
  res.json(editoraAtual);
});

app.get("/editora", (req, res) => {
  res.json(editoraList);
});

app.put("/editora/:codigo", (req, res) => {
    const codigo = req.params.codigo;
    const editora = editoraList.find(editoraAtual => editoraAtual.idEditora == codigo);
    const { nome, codigoEditora, edicao } = req.body;
    editora.nome = nome;
    editora.codigoEditora = codigoEditora;
    editora.edicao = edicao;
    res.json(editora);
})

app.listen(8000);
