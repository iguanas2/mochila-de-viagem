const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const nome = document.getElementById("nome").value;
const quantidade = document.getElementById("quantidade").value;

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(nome,quantidade);
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.appendChild = quantidade

    novoItem.appendChild = numeroItem + nome
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}