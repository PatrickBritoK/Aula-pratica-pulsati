import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { format } from 'date-fns';


@Entity("PATRICK_LIVRO_MVCs")
export class Livro {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  titulo: string;

  @Column({ type: "number" })
  edicao: number;

  @Column({ type: "date" })
  dataPublicacao: Date;
}
const dataPublicacaoBrasileira = format(dataPublicacao, 'dd/MM/yyyy');

