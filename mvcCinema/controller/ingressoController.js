const Ingresso = require("../model/ingressoModel").Ingresso;

exports.createIngresso = async (req, res) => {
  const { codigoSessao } = req.body;
  const ingresso = new Ingresso();
  ingresso.codigoSessao = codigoSessao;
  await ingresso.save();
  res.json(ingresso);
};

exports.getIngresso = async (req, res) => {
  Ingresso.findAll().then((result) => res.json(result));
};

exports.getIngressoId = async (req, res) => {
  const idIngresso = req.params.idIngresso;
  const ingresso = await Ingresso.findByPk(idIngresso);
  res.json(ingresso);
};

exports.updateIngresso = async (req, res) => {
  const idIngresso = req.params.idIngresso;
  const ingresso = await Ingresso.findByPk(idIngresso);
  const { codigoSessao } = req.body;
  ingresso.codigoSessao = codigoSessao;
  res.json(ingresso);
};

exports.deleteIngresso = async (req, res) => {
  const idIngresso = req.params.idIngresso;
  const ingresso = await Ingresso.findByPk(idIngresso);
  await ingresso.destroy();
  res.json({ Data: ">>>>>Deletado<<<<<" });
};
