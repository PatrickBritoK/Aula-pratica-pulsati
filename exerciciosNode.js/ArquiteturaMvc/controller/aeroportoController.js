const Aeroporto = require("../model/aeroportoModel").Aeroporto;

exports.creataAeroporto = async (req, res) => {
  const { nome, endereco } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  aeroporto.endereco = endereco;
  await aeroporto.save();
  res.json(aeroporto);
};

exports.getAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
};

exports.updateAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome, endereco } = req.body;
  aeroporto.nome = nome;
  aeroporto.endereco = endereco;
  await aeroporto.save();
  res.json(aeroporto);
};

exports.deleteAeroporto = async (req, res) => {
    const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: ">>>>>>>>>>Aeroporto apagado com sucesso<<<<<<<<<<" });
}
