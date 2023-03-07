import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Autor } from "../model/AutorModel";

export class AutorController {
  async create(req: Request, res: Response) {
    const {
      nome,
      sobrenome,
      dataNascimento,
    }: {
      nome: string;
      sobrenome: string;
      dataNascimento: Date;
    } = req.body;
    const autor = new Autor();
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.dataNascimento = dataNascimento

    const repo = AppDataSource.getRepository(Autor);
    await repo.save(autor);

    res.json(autor);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Autor);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(livro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, sobrenome, dataNascimento } = req.body;

    const repo = AppDataSource.getRepository(Autor);
    const autor = await repo.findOneBy({ codigo: parseInt(id, 10) });
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.dataNascimento = dataNascimento;

    await repo.save(autor);
    res.json(autor);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Autor);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Autor" });
  }
}
