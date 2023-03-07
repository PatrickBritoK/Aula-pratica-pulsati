import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("PATRICK_EDITORA_MVCs")
export class Editora {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "varchar2" })
  cnpj: string;

  
}
