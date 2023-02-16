class aeroporto {
   codigo;
   nome;
   codigoAeroporto;
   endereco;
   
   constructor(codigo,nome, codigoAeroporto, endereco){ 
      this.codigo = codigo;
    this.nome = nome;
    this.codigoAeroporto = codigoAeroporto;
    this.endereco = endereco;
   }
   getAeroporto(){
    return `${this.nome} ${this.codigoAeroporto} ${this.endereco}`
   }
}
exports.aeroporto = aeroporto;