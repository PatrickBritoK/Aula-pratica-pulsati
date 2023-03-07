import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Editora as Editora } from "../model/EditoraModel";

export class EditoraController {
  async create(req: Request, res: Response) {
    const {
      nome,
      cnpj,
    }: {
      nome: string;
      cnpj: string;
    } = req.body;
    const livro = new Editora();
    livro.nome = nome;
    livro.cnpj = cnpj;

    const repo = AppDataSource.getRepository(Editora);
    await repo.save(livro);

    res.json(livro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(livro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, cnpj } = req.body;

    const repo = AppDataSource.getRepository(Editora);
    const editora = await repo.findOneBy({ codigo: parseInt(id, 10) });
    editora.nome = nome;
    editora.cnpj = cnpj;

    await repo.save(editora);
    res.json(editora);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Editora" });
  }
}
