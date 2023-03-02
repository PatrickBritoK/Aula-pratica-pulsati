function botao() {
    let newClass = document.getElementById('addClass');
    newClass.classList.add("teste");
    console.log(newClass.classList[0]);  //Mostrar no console qual foi a classe adicionada.
}