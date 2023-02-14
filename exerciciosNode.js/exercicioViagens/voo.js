class voo {
    voo;
    aeroporto;
    codigo;
    nome;

    constructor(voo, aeroporto, codigo, nome){
        this.voo = voo;
        this.aeroporto = aeroporto;
        this.codigo = codigo;
        this.nome = nome;
    }
    getVoo(){
        return `${this.voo} ${this.aeroporto} ${this.codigo} ${this.nome}`
    }
}


exports.voo = voo;