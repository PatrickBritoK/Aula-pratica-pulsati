const Livro = require('../model/livroModel').Livro;

exports.createLivro = async (req, res) => {
    const { titulo, edicao, lancamento } = req.body;
    const livro = new Livro();
    livro.titulo = titulo;
    livro.edicao = edicao;
    livro.lancamento = lancamento;
    await livro.save();
    res.json(livro);
};

exports.getLivro = async (req, res) => {
    const codigo = req.params.codigo;
  const livro = await Livro.findByPk(codigo);
  res.json(livro);
};

exports.updateLivro = async (req,res) => {
    const codigo = req.params.codigo;
    const livro = await Livro.findByPk(codigo);
    const {  titulo, edicao, lancamento } = req.body;
    livro.titulo = titulo;
    livro.edicao = edicao;
    livro.lancamento = lancamento;
    await livro.save();
    res.json(livro);
};

exports.deleteLivro = async (req, res) => {
    const codigo = req.params.codigo;
    const livro = await Livro.findByPk(codigo);
    await livro.destroy();
    res.json({ data: ">>>>>>>>>>Livro deletado com sucesso<<<<<<<<<<" });
}

