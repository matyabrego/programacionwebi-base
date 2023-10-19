const PAIS_1 = { nombre: "argentina", capital: "buenos aires" }
const PAIS_2 = { nombre: "brasil", capital: "brasilia" }
const PAIS_3 = { nombre: "ecuador", capital: "quito" }
const PAIS_4 = { nombre: "peru", capital: "lima" }
const PAIS_5 = { nombre: "francia", capital: "paris" }
const PAIS_6 = { nombre: "españa", capital: "madrid" }
const PAIS_7 = { nombre: "portugal", capital: "lisboa" }
const PAIS_8 = { nombre: "suiza", capital: "berna" }

const PAISES = [PAIS_1, PAIS_2, PAIS_3, PAIS_4, PAIS_5, PAIS_6, PAIS_7, PAIS_8];

const nodoPalabraABuscar = document.querySelector("#palabra-a-buscar");

nodoPalabraABuscar.addEventListener("keyup", e => {

    const palabraABuscar = nodoPalabraABuscar.value;
    const nodoSection = document.getElementById("paises");
    const paisesConLaPalabra = PAISES.filter(elemento => elemento.nombre.includes(palabraABuscar))

    nodoSection.innerHTML = "";
    for(let pais of paisesConLaPalabra){
        nodoSection.innerHTML += `<article> ${pais.nombre} </article>`;
    }
})