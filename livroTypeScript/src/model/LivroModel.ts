import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PATRICK_LIVRO_MVCs")
export class Livros {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  titulo: string;

  @Column({ type: "number" })
  edicao: number;

  @Column({ type: "date" })
  dataPublicacao: Date;
}
