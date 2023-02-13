console.log("ARRAY INCLUDES")

const nomeCompleto = ['Patrick', 'Brito'];

console.log(nomeCompleto.length);
console.log(nomeCompleto[0]);
console.log(nomeCompleto.indexOf('Patrick'));

console.log("FIND")

const resultado = nomeCompleto.find(n => n == 'Patrick');
console.log(resultado)

const obj = [{ chave: 1, valor: 'Opção 1'},
            { chave: 2, valor: 'Opção 2'},
            { chave: 3, valor: 'Opção 3'},
            { chave: 4, valor: 'Opção 4'}];

const opçãoSelecionada = obj.find(opcao => opcao.chave == 1);
console.log(opçãoSelecionada);


console.log('MAP ENTRIES/KEYS/VALUES')

const usuario = {
    nome: 'Patrick',
    sobrenome: 'Brito',
    idade: 19,
    sexo: 'Masculino'
}

console.log(Object.entries(usuario));
Object.entries(usuario).forEach(dados => console.log(dados))

const imprimir = (...chaves) => {
    //chaves == ['nome', 'sobrenome'];
    const valores = chaves.map(chave => usuario[chave]);
    console.log(valores)
}

console.log("Imprimir nome e sobrenome");
imprimir('nome', 'sobrenome');

const nomes = 'Todas';
console.log(Object.keys(usuario));
imprimir(...Object.keys(usuario));

console.log(Object.values(usuario));