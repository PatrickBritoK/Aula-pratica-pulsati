import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto } from "../model/aeroportoModel";

export class AeroportoController {
  async create(req: Request, res: Response) {
    const {
      nome,
      endereco,
    }: {
      nome: string;
      endereco: string;
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;
    aeroporto.endereco = endereco;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(aeroporto);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, endereco } = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });
    aeroporto.nome = nome;
    aeroporto.endereco = endereco;

    await repo.save(aeroporto);
    res.json(aeroporto);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar aeroporto" });
  }
}
