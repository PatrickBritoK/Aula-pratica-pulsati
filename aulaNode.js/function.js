console.log("VALOR PADRÃO PARA OS PARAMETROS");

function nomeUsuario(nome, sobrenome = 'Não informado'){
    console.log(nome, sobrenome);
}

nomeUsuario('Patrick', 'Brito');
nomeUsuario('Patrick');

console.log('REST PARAMETERS')

function nomeUsuario(...nomes){
    console.log(nomes);
}

function soma(...numeros){
    console.log(numeros[0] + numeros[1])
}

nomeUsuario('Patrick', 'Brito','de','nsei');
nomeUsuario('Patrick');
soma(2, 2);
//========================================================================================================
console.log('ARROW FUNCTION');



function nomeUsuario (...nomes){
    console.log(nomes)
}

nomeUsuario2 = (...nomes) => {
console.log(nomes);
}
nomeUsuario2('Patrick', 'Brito');

//========================================================================================================

console.log('DESTRUCTING PARAMETERS');

const imprimirNome = (objeto) => { //outra forma: const imprimirNome = ({nome, sobrenome = 'Não informado', ultimoNome = 'Não informado'})
    const {nome , sobrenome} = objeto;
    //const nome = objeto.nome;
    //const sobrenome = objeto.sobrenome;
    console.log(nome, sobrenome);
}

imprimirNome({nome: "Patrick", sobrenome:"Brito"})

//========================================================================================================
console.log("String Template")

const imprimirNome2 = ({
    nome,
    sobrenome = 'Não informado',
    utlimoNome = 'Não informado'}) => {
        console.log(`${nome}${sobrenome}${utlimoNome}`);
    }

    imprimirNome2({nome: 'Patrick ', sobrenome: 'Brito ', utlimoNome: 'Não tenho meo'})