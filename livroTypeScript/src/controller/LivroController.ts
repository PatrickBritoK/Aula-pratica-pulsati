import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Livro as Livro } from "../model/LivroModel";

export class LivroController {
  async create(req: Request, res: Response) {
    const {
      titulo,
      edicao,
      dataPublicacao,
    }: {
      titulo: string;
      edicao: number;
      dataPublicacao: Date;
    } = req.body;
    const livro = new Livro();
    livro.titulo = titulo;
    livro.edicao = edicao;
    livro.dataPublicacao = dataPublicacao;

    const repo = AppDataSource.getRepository(Livro);
    await repo.save(livro);

    res.json(livro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(livro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { titulo, edicao, dataPublicacao } = req.body;

    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });
    livro.titulo = titulo;
    livro.edicao = edicao;
    livro.dataPublicacao = dataPublicacao;

    await repo.save(livro);
    res.json(livro);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Livro);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Livro" });
  }
}
