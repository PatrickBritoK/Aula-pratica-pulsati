const Sessao = require("../model/sessaoModel").Sessao;

exports.createSessao = async (req, res) => {
  const { dataSessao, nomeFilme, valorIngresso, ingressosVendidos } = req.body;
  const sessao = new Sessao();
  sessao.dataSessao = dataSessao;
  sessao.nomeFilme = nomeFilme;
  sessao.valorIngresso = valorIngresso;
  sessao.ingressosVendidos = ingressosVendidos;
  await sessao.save();
  res.json(sessao);
};

exports.getSessao = async (req, res) => {
  Sessao.findAll().then((result) => res.json(result));
};

exports.getSessaoId = async (req, res) => {
  const idSessao = req.params.idSessao;
  const sessao = await Sessao.findByPk(idSessao);
  res.json(sessao);
};

exports.updateSessao = async (req, res) => {
  const idSessao = req.params.idSessao;
  const sessao = await Sessao.findByPk(idSessao);
  const { dataSessao, nomeFilme, valorIngresso, ingressosVendidos } = req.body;
  sessao.dataSessao = dataSessao;
  sessao.nomeFilme = nomeFilme;
  sessao.valorIngresso = valorIngresso;
  sessao.ingressosVendidos = ingressosVendidos;
  await sessao.save();
  res.json(sessao);
};

exports.deleteSessao = async (req, res) => {
  const idSessao = req.params.idSessao;
  const sessao = await Sessao.findByPk(idSessao);
  await sessao.destroy();
  res.json({ Data: ">>>>>Deletado<<<<<" });
};


