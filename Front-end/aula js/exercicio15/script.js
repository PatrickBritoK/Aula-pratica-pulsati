function botao() {
    let newClass = document.getElementById('removeClass');
    newClass.classList.remove("test");
    console.log(newClass.classList[0]);
}