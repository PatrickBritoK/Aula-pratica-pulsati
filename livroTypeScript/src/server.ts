import express from "express";
import AppDataSource from "./config/Database";
import { EditoraController } from "./controller/EditoraController";
import { LivroController } from "./controller/LivroController";
import { AutorController } from "./controller/AutorController";


AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/editora", new EditoraController().create);
    app.get("/editora/:id", new EditoraController().get);
    app.put("/editora/:id", new EditoraController().update);
    app.delete("/editora/:id", new EditoraController().delete);


    app.post("/livro", new LivroController().create);
    app.get("/livro/:id", new LivroController().get);
    app.put("/livro/:id", new LivroController().update);
    app.delete("/livro/:id", new LivroController().delete);

    app.post("/autor", new AutorController().create);
    app.get("/autor/:id", new AutorController().get);
    app.put("/autor/:id", new AutorController().update);
    app.delete("/autor/:id", new AutorController().delete);
    
    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
