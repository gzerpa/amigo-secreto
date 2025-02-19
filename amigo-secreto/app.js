// Array para almacenar los nombres de los amigos
let amigos = [];

// Capturar elementos del DOM
const inputNombre = document.getElementById("nombre");
const btnAdicionar = document.getElementById("adicionar");
const btnSortear = document.getElementById("sortear");
const btnTerminar = document.getElementById("terminar");
const listaAmigos = document.getElementById("lista-amigos");
const resultadoSorteo = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Convertir nombre a mayúsculas respetando nombres compuestos
    nombre = nombre.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());

    if (amigos.includes(nombre)) {
        alert("Este amigo ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la tabla con los nombres ingresados
function actualizarLista() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = amigo;

        // Ajustar el tamaño de fuente dependiendo de la cantidad de nombres
        if (amigos.length > 5) {
            td.classList.add("small-text");
        }

        tr.appendChild(td);
        listaAmigos.appendChild(tr);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultadoSorteo.textContent = `🎉 El Amigo Secreto es: ${amigoSorteado} 🎉`;
}

// Función para terminar el juego y reiniciar todo
function terminarJuego() {
    amigos = [];
    actualizarLista();
    resultadoSorteo.textContent = "";
}

// Asignar eventos a los botones
btnAdicionar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
btnTerminar.addEventListener("click", terminarJuego);

// Permitir agregar amigos con la tecla Enter
inputNombre.addEventListener("keypress", (event) => {
    if (event.key === "Enter") agregarAmigo();
});
