const Estoque = require("../model/estoqueModel").Estoque;

exports.createEstoque = async (req, res) => {
  const { CodEstoqueProduto, quantidadeEstoque } = req.body;
  const estoque = new Estoque();
  estoque.CodEstoqueProduto = CodEstoqueProduto;
  estoque.quantidadeEstoque = quantidadeEstoque;
  await estoque.save();
  res.json(estoque);
};

exports.getEstoque = async (req, res) => {
  Vendedor.findAll().then((result) => res.json(result));
};

exports.getEstoqueById = async (req, res) => {
  const idEstoque = req.params.idEstoque;
  const estoque = await Estoque.findByPk(idEstoque);
  res.json(estoque);
};

exports.updateEstoque = async (req, res) => {
  const idEstoque = req.params.idEstoque;
  const estoque = await Estoque.findByPk(idEstoque);
  const { CodEstoqueProduto, quantidadeEstoque } = req.body;
  estoque.CodEstoqueProduto = CodEstoqueProduto;
  estoque.quantidadeEstoque = quantidadeEstoque;
  await estoque.save();
  res.json(estoque);
};

exports.deleteEstoque = async (req, res) => {
    const idEstoque = req.params.idEstoque;
    const estoque = await Estoque.findByPk(idEstoque);
    await estoque.destroy();
    res.json({
      data: ">>>>>>>>>>Estoque eliminado com sucesso<<<<<<<<<<", });
};
