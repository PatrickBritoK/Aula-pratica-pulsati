const Vendedor = require("../model/vendedorModel").Vendedor;

exports.createVendedor = async (req, res) => {
  const { nome, cpf, telefone, endereco } = req.body;
  const vendedor = new Vendedor();
  vendedor.nome = nome;
  vendedor.cpf = cpf;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
};

exports.getVendedor = async (req, res) => {
  Vendedor.findAll().then((result) => res.json(result));
};

exports.getVendedorByid = async (req, res) => {
  const idVendedor = req.params.idVendedor;
  const vendedor = await Vendedor.findByPk(idVendedor);
  res.json(vendedor);
};

exports.updateVendedor = async (req, res) => {
  const idVendedor = req.params.idVendedor;
  const vendedor = await Vendedor.findByPk(idVendedor);
  const { nome, cpf, telefone, endereco } = req.body;
  vendedor.nome = nome;
  vendedor.cpf = cpf;
  vendedor.telefone = telefone;
  vendedor.endereco = endereco;
  await vendedor.save();
  res.json(vendedor);
};

exports.deleteVendedor = async (req, res) => {
  const idVendedor = req.params.idVendedor;
  const vendedor = await Vendedor.findByPk(idVendedor);
  await vendedor.destroy();
  res.json({
    data: ">>>>>>>>>>Vendedor eliminado com sucesso(meio estranho a frase...)<<<<<<<<<<",
  });
};
