function checarAnagrama(a, b){
    if(a.lenght !== b.lenght){
        return console("Não é um anagrama")
    }

    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    let resultado = (str1 === str2);
    return console.log("É um anagrama")
}
console.log(checarAnagrama('abc', 'cba'));