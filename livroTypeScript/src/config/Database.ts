import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import { Livro } from "../model/LivroModel";
import { Editora } from "../model/EditoraModel";
import { Autor } from "../model/AutorModel";


const AppDataSource = new DataSource({
  type: "oracle",
  host: "192.168.0.50",
  port: 1521,
  username: "system",
  password: "pulsati2023",
  database: "xe",
  entities: [Livro, Editora, Autor],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export default AppDataSource;
