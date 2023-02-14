class aeroporto {
   nome;
   codigo;
   endereco;
   
   constructor(nome, codigo, endereco){
    this.nome = nome;
    this.codigo = codigo;
    this.endereco = endereco;
   }
   getAeroporto(){
    return `${this.nome} ${this.codigo} ${this.endereco}`
   }
}
exports.aeroporto = aeroporto;