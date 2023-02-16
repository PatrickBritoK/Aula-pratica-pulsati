class Aeroporto {
    codigo;
    nome;
    endereco;
    
    constructor(codigo,nome, endereco){ 
       this.codigo = codigo;
     this.nome = nome;
     this.endereco = endereco;
    }
    getAeroporto(){
     return `${this.nome}  ${this.endereco}`
    }
 }
 exports.Aeroporto = Aeroporto;