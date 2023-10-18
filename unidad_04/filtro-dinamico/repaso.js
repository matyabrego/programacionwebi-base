//JSON.parser
//parseInt

const numero = 34;
const cadena = "EsUnaCadena"

localStorage.setItem("numero", numero);
localStorage.setItem("cadena", cadena);

const numeroLocalStorage = parseInt(localStorage.getItem("numero"))
const cadenaLocalStorage = localStorage.getItem("cadena")

console.log(typeof(numeroLocalStorage));
console.log(typeof(cadenaLocalStorage));

localStorage.removeItem("numero");
//localStorage.clear();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// {} --> Objectos
// [] --> Arreglos / vectores
// Para JS los arreglos son objectos

/*  Para objetos
    {
        "atributo1": "valor1",
        "atributo2": "valor2",
        ...
    }
*/

/*  Para arreglos
    [ elemento1, elemento2, elemento3,...]
*/

/**
 * INPUT y TEXTAREAS --> atribute value
 * OTROS --> textContent
 */

const persona = {
    nombre: "Damian",
    apellido: "Spizzirri",
    edad: 32
}

localStorage.setItem("humano", JSON.stringify(persona));

persona.edad = 33;

const humanoString = localStorage.getItem("humano");
const humano = JSON.parse(humanoString);
