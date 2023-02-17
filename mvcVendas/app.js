const { createVendedor, getVendedor,getVendedorByid, updateVendedor, deleteVendedor } = require ("./controller/vendedorController");
const { createProdutos, getProdutos,getProdutosById, updateProdutos, deleteProdutos } = require("./controller/produtoController");
const { createEstoque, getEstoque,getEstoqueById, updateEstoque, deleteEstoque } = require("./controller/estoqueController");
const { createVenda, getVenda,getVendaById, updateVenda, deleteVenda } = require("./controller/vendaController");

const express = require('express');
const app = express();
app.use(express.json());

app.post("/vendedor", createVendedor);
app.get("/vendedor", getVendedor);
app.get("/vendedorID/:idVendedor", getVendedorByid);
app.put("/vendedorATT/:idVendedor", updateVendedor);
app.delete("/vendedorDelete/:idVendedor", deleteVendedor);

app.post("/produto",createProdutos);
app.get("/produto", getProdutos);
app.get("/produtoID/:idProduto", getProdutosById)
app.put("/produtosATT/:idProduto", updateProdutos);
app.delete("/produtoDelete/:idProduto", deleteProdutos);

app.post("/estoque", createEstoque);
app.get("/estoque",getEstoque);
app.get("/estoqueID/:idEstoque", getEstoqueById)
app.put("/estoqueATT/:idEstoque", updateEstoque);
app.delete("/estoqueDelete/:idEstoque", deleteEstoque);

app.post("/venda", createVenda);
app.get("/venda", getVenda);
app.get("/vendaID/:idVenda", getVendaById)
app.put("/venda/:idVenda", updateVenda);
app.delete("/venda/:idVenda", deleteVenda)

app.listen(8000);