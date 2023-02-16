class empresasAereas {
    codigo;
    nome;
    sede;

    constructor(codigo,nome,sede){
        this.codigo = codigo;
        this.nome = nome;
        this.sede = sede;
    }
getEmpressa(){
    return `${this.codigo}${this.nome}${this.sede}`
}
}
exports.empresasAereas = empresasAereas;