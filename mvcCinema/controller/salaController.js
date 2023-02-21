const Sala = require("../model/salaModel").Sala;

exports.createSala = async (req, res) => {
  const { nome, capacidadeMaxima } = req.body;
  const sala = new Sala();
  sala.nome = nome;
  sala.capacidadeMaxima = capacidadeMaxima;
  await sala.save();
  res.json(sala);
};

exports.getSala = async (req, res) => {
  Sala.findAll().then((result) => res.json(result));
};

exports.getSalaId = async (req, res) => {
  const idSala = req.params.idSala;
  const sala = await Sala.findByPk(idSala);
  res.json(sala);
};

exports.updateSala = async (req, res) => {
  const idSala = req.params.idSala;
  const sala = await Sala.findByPk(idSala);
  const { nome, capacidadeMaxima } = req.body;
  sala.nome = nome;
  sala.capacidadeMaxima = capacidadeMaxima;
  await sala.save();
  res.json(sala);
};

exports.deleteSala = async (req, res) => {
  const idSala = req.params.idSala;
  const sala = await Sala.findByPk(idSala);
  await sala.destroy();
  res.json({ Data: ">>>>>Eliminado<<<<<" });
};
