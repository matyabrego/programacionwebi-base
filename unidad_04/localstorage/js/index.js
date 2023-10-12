const title = document.getElementsByTagName("button");
const inputSearch = document.getElementsByName("search-inputs");
const submitButton = document.getElementById("submit");
const form = document.querySelectorAll(".btn");

// console.log(title);
// console.log(inputSearch);
// console.log(submitButton);
// console.log(form);

const parentDiv = document.querySelector(".elements");
const personName = "Damian";
const personCountry = "Argentina";
const newTitle = document.createElement("h1");
newTitle.innerHTML = `<p>Bienvenido <span className='user'>${personName} ${personCountry}</span>  </p>`;

// const textoViejo = "<p>Bienvenido <span>" + personName + personCountry + "</span>";

console.log(newTitle);
// console.log(text);
parentDiv.appendChild(newTitle);
// newTitle.appendChild(text);

// newTitle.parentNode.removeChild(newTitle);

// newTitle.style.backgroundColor = 'red';

newTitle.classList.add('bkg--color-green');

