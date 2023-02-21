const Emissao = require("../model/emissaoModel").Emissao;
const Sessao = require("../model/sessaoModel").Sessao;

exports.emitir = async (req, res) => {
    const idEmissao = req.params.idEmissao;
    const sessao = await Sessao.findByPk(idEmissao);
    if (sessao.ingressosVendidos >= 20) {
        res.json({Error:422,
            data: "Sessao esgotada, verifique as sessões disponiveis.",
          });
        await sessao.save();
    } else {
        sessao.ingressosVendidos++;
        await sessao.save();
        res.json(sessao);
    }
};