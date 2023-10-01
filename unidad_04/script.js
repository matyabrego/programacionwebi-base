/***
 * var : Para variables globales (es mala práctica y ya no se usa)
 * let : Para variables locales y no constantes.
 * const : Para variables locales y constantes.
 */

/**
 * Callback: Es una funcion que se envia por parametro a una funcion / metodo
 * 
 */

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

/*
dias.forEach((item)=>{
    console.log(item);
});
*/

const callback = (elemento) => { console.log(elemento);}

dias.forEach(callback);

/*
function callback(elemento){
    console.log(elemento);
    console.log(elemento);
}
*/