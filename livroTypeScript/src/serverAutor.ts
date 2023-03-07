import express from "express";
import AppDataSource from "./config/Database";
import { AutorController } from "./controller/AutorController";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/autor", new AutorController().create);
    app.get("/autor/:id", new AutorController().get);
    app.put("/autor/:id", new AutorController().update);
    app.delete("/autor/:id", new AutorController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
