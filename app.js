// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.

let amigos = []; 
document.querySelector("#amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

// Adicionar os nomes dos amigos
function adicionarAmigo() {
    let campoNome = document.querySelector("#amigo");
    let nomeAmigo = campoNome.value.trim(); 

    if (nomeAmigo) { 
        amigos.push(nomeAmigo); 
        campoNome.value = ""; 
        atualizarLista(); 
    } else {
        alert("Por favor, insira um nome válido!"); 
    }
}


// Atualizar a lista na tela
function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 

//Mostrar o nome com inicial maiúsucla 
    amigoSorteado = amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1).toLowerCase(); 

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <br><strong>${amigoSorteado}</strong>`;
    }



