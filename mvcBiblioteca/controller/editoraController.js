const Editora = require('../model/editoraModel').Editora;

exports.createEditora = async (req, res) => {
    const { nome, cnpj} = req.body;
    const editora = new Editora();
    editora.nome = nome;
    editora.cnpj = cnpj;
    await editora.save();
    res.json(editora);
};

exports.getEditora = async (req, res) => {
    const codigo = req.params.codigo;
  const editora = await Editora.findByPk(codigo);
  res.json(editora);
};

exports.updateEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const editora = await Editora.findByPk(codigo);
    const { nome, cnpj } = req.body;
    editora.nome = nome;
    editora.cnpj = cnpj;
    await editora.save();
    res.json(editora);
};

exports.deleteEditora = async (req, res) => {
    const codigo = req.params.codigo;
  const editora = await Editora.findByPk(codigo);
  await editora.destroy();
  res.json({ data: ">>>>>>>>>>Editora apagada com sucesso<<<<<<<<<<" });
};