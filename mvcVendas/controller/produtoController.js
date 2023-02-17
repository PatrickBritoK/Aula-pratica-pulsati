const Produto = require("../model/produtoModel").Produto;

exports.createProdutos = async (req, res) => {
  const { nome, marca, descricao, valor } = req.body;
  const produto = new Produto();
  produto.nome = nome;
  produto.marca = marca;
  produto.descricao = descricao;
  produto.valor = valor;
  await produto.save();
  res.json(produto);
};

exports.getProdutos = async (req, res) => {
  Vendedor.findAll().then((result) => res.json(result));
};

exports.getProdutosById = async (req, res) => {
  const idProduto = req.params.idProduto;
  const produto = await Produto.findByPk(idProduto);
  res.json(produto);
};

exports.updateProdutos = async (req, res) => {
  const idProduto = req.params.idProduto;
  const produto = await Produto.findByPk(idProduto);
  const { nome, marca, descricao, valor } = req.body;
  produto.nome = nome;
  produto.marca = marca;
  produto.descricao = descricao;
  produto.valor = valor;
  await produto.save();
  res.json(produto);
};

exports.deleteProdutos = async (req, res) => {
    const idProduto = req.params.idProduto;
  const produto = await Produto.findByPk(idProduto);
  await produto.destroy();
  res.json({
    data: ">>>>>>>>>>Produto eliminado com sucesso<<<<<<<<<<", });
};
