import express from "express";
import AppDataSource from "./config/Database";
import { LivroController } from "./controller/LivroController";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/livro", new LivroController().create);
    app.get("/livro/:id", new LivroController().get);
    app.put("/livro/:id", new LivroController().update);
    app.delete("/livro/:id", new LivroController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
