function addElementToPage() {
  // Cria um novo elemento <p>
  let novoElemento = document.createElement("p");
  // Adiciona um conteúdo ao novo elemento
  let novotexto = document.createTextNode(
    "Este é um novo elemento adicionado à página."
  );
  novoElemento.appendChild(novotexto);
  // Encontra um elemento existente na página
  let elementoExistente = document.getElementById("elemento_Existente");
  // Adiciona o novo elemento como um filho do elemento existente.
  elementoExistente.appendChild(novoElemento);
}
