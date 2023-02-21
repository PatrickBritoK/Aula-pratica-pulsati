const Filme = require("../model/filmeModel").Filme;

exports.createFilme = async (req, res) => {
    const { nomeFilme,horarioSessao,ingressosComprados } = req.body;
    const filme = new Filme();
    filme.nomeFilme = nomeFilme;
    filme.horarioSessao = horarioSessao;
    filme.ingressosComprados = ingressosComprados;
    await filme.save();
    res.json(filme);
};

exports.getFilme = async (req, res) => {
    const idFilme = req.params.idFilme;
  const filme = await Filme.findByPk(idFilme);
  res.json(filme);
};

exports.updateFilme = async (req, res) => {
    const idFilme = req.params.idFilme;
  const filme = await Sessao.findByPk(idFilme);
  const { nomeFilme,horarioSessao,ingressosComprados } = req.body;
  filme.nomeFilme = nomeFilme;
  filme.horarioSessao = horarioSessao;
  filme.ingressosComprados = ingressosComprados;
  await filme.save();
  res.json(filme);  
};

exports.deleteFilme = async (req,res) => {
    const idFilme = req.params.idFilme;
  const filme = await Sessao.findByPk(idFilme);
  await filme.destroy();
  res.json({Data: ">>>>>Filme deletado<<<<<"})
};