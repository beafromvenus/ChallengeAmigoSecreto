//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Variável para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let campoNome = document.querySelector("#amigo");
    let nomeAmigo = campoNome.value.trim(); // Remove espaços extras

    if (nomeAmigo) { // Verifica se o campo não está vazio
        amigos.push(nomeAmigo); // Adiciona o nome ao array de amigos
        campoNome.value = ""; // Limpa o campo de entrada
        atualizarLista(); // Atualiza a lista na tela
    } else {
        alert("Por favor, insira um nome.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.querySelector("#listaAmigos"); // Seleciona o <ul> da lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) { // Percorre o array amigos
        let item = document.createElement("li"); // Cria um <li>
        item.textContent = amigos[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à <ul>
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert("Não há amigos cadastrados. Por favor, adicione amigos primeiro!");
        return; // Se não houver amigos, sai da função
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Pega o nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome do amigo sorteado na tela
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>;
}