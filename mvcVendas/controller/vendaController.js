const Venda = require("../model/vendasModel").Venda;

exports.createVenda = async (req, res) => {
  const { codVendedor, codProduto, quantidadeVendida } = req.body;
  const venda = new Venda();
  venda.codVendedor = codVendedor;
  venda.codProduto = codProduto;
  venda.quantidadeVendida = quantidadeVendida;
  await venda.save();
  res.json(venda);
};

exports.getVenda = async (req, res) => {
  function comparar(a, b) {
    if (a.idVenda > b.idVenda) return -1;
    if (a.idVenda < b.idVenda) return 1;
    return 0;
  }
  Venda.findAll().then((result) => res.json(result.sort(comparar)));
};

exports.getVendaById = async (req, res) => {
  const idVenda = req.params.idVenda;
  const venda = await Venda.findByPk(idVenda);
  res.json(venda);
};

exports.updateVenda = async (req, res) => {
  const idVenda = req.params.idVenda;
  const venda = await Vendedor.findByPk(idVenda);
  const { codVendedor, codProduto, quantidadeVendida } = req.body;
  venda.codVendedor = codVendedor;
  venda.codProduto = codProduto;
  venda.quantidadeVendida = quantidadeVendida;
  await venda.save();
  res.json(venda);
};

exports.deleteVenda = async (req, res) => {
    const idVenda = req.params.idVenda;
  const venda = await Venda.findByPk(idVenda);
  await venda.destroy();
  res.json({
    data: ">>>>>>>>>>Venda eliminado com sucesso(meio estranho a frase...)<<<<<<<<<<",
  });
}
