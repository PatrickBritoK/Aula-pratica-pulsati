import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("PATRICK_AUTOR_MVCs")
export class Autor {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "varchar2" })
  sobrenome: string;

  @Column({ type: "date" })
  dataNascimento: Date;
}
