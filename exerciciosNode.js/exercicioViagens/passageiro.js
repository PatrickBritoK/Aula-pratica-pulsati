class passageiro {
    nome;

    constructor(nome){
        this.nome = nome;
    }
    getPassageiro(){
        return `${this.nome}`
    }

}
exports.passageiro = passageiro;
