function mudarCor() {
    let opcao = document.getElementById('opcao').value;
    let texto = document.getElementById('texto');

    if (opcao == 'vermelho'){
        texto.style.backgroundColor ='red';
    } else if (opcao == 'verde'){
        texto.style.backgroundColor = 'green';
    } else if (opcao == 'azul'){
        texto.style.backgroundColor = 'blue';
    }
    
}