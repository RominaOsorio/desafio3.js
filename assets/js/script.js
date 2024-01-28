/*

Ejercicio 2.2
Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función


const ele = document.querySelector('#ele1');
ele.addEventListener('click', () => pintar(ele));

function pintar(element) {
    element.style.backgroundColor = 'yellow';
}

*/



/* Ejercicio 2.3
Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color.
*/

const pintar = (element, color) => {
    element.style.backgroundColor = color};

const ele = document.querySelector('#ele1');

ele.addEventListener('click', () => pintar(ele, 'yellow'));