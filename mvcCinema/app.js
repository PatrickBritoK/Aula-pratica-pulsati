const { createSala, getSala, getSalaId, updateSala, deleteSala} = require("./controller/salaController");
const { createSessao, getSessao, getSessaoId, updateSessao, deleteSessao } = require("./controller/sessaoController");
const { createIngresso, getIngresso, getIngressoId, updateIngresso, deleteIngresso } = require("./controller/ingressoController");
const { emitir } = require("./controller/emissaoController");
const { createFilme, getFilme, getFilmeId, updateFilme, deleteFilme } = require


const express = require('express');
const app = express();
app.use(express.json());

app.post("/sala", createSala);
app.get("/sala", getSala);
app.get("/sala/:id", getSalaId);
app.put("/sala/:id", updateSala);
app.delete("/sala/:id", deleteSala);

app.post("/sessao", createSessao);
app.get("/sessao", getSessao);
app.get("/sessao/:id", getSessaoId);
app.put("/sessao/:id", updateSessao);
app.delete("/sessao/:id", deleteSessao);

app.post("/ingresso", createIngresso);
app.get("/ingresso", getIngresso);
app.get("/ingresso/:id", getIngressoId);
app.put("/ingresso/:id", updateIngresso);
app.delete("/ingresso/:id", deleteIngresso);

app.put("/emitirIngresso/:idEmissao", emitir);

app.post("/filme", createFilme);
app.get("/filme", getFilme);
app.get("/filme/:idFilme", getFilmeId);
app.put("/filme/:idFilme", updateFilme);
app.delete("/filme/:idFilme", deleteFilme);


app.listen(8000);