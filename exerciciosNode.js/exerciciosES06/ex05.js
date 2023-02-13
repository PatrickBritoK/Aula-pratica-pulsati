/*class PessoaFisica{
    nome = "Patrick";
    sobrenome = "Brito"

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}*/

class ContaBancaria{
    nome = "Seu José"
    valor = 350;

    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
    }
    imprimir(){
        console.log(this.nome, this.valor)
    }
}
