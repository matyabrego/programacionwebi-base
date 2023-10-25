const PAIS_1 = { nombre: "argentina", capital: "buenos aires" };
const PAIS_2 = { nombre: "brasil", capital: "brasilia" };
const PAIS_3 = { nombre: "ecuador", capital: "quito" };
const PAIS_4 = { nombre: "peru", capital: "lima" };
const PAIS_5 = { nombre: "francia", capital: "paris" };
const PAIS_6 = { nombre: "españa", capital: "madrid" };
const PAIS_7 = { nombre: "portugal", capital: "lisboa" };
const PAIS_8 = { nombre: "suiza", capital: "berna" };

const PAISES = [PAIS_1, PAIS_2, PAIS_3, PAIS_4, PAIS_5, PAIS_6, PAIS_7, PAIS_8];

const nodoPalabraABuscar = document.querySelector("#palabra-a-buscar");

const handleListItemClick = (list) => {
  list.forEach((listItem) => {
    listItem.addEventListener("click", (event) => {
			const target = event.target;

			console.log(target.innerHTML);
      console.log(target);
    });
  });
};

nodoPalabraABuscar.addEventListener("keyup", (e) => {
  const palabraABuscar = nodoPalabraABuscar.value;
  const nodoSection = document.getElementById("paises");
  const paisesConLaPalabra = PAISES.filter((elemento) =>
    elemento.nombre.includes(palabraABuscar)
  );

  nodoSection.innerHTML = "";
  for (let pais of paisesConLaPalabra) {
    nodoSection.innerHTML += `<article class='country-item'> ${pais.nombre} </article>`;
  }

  const countryList = document.querySelectorAll(".country-item");
  handleListItemClick(countryList);
});

const countryListLoaded = document.querySelectorAll(".country");
handleListItemClick(countryListLoaded);
