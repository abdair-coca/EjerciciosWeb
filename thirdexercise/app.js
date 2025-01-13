const suma = document.querySelector('#sumar')
const resta = document.querySelector('#restar')
let numero = document.getElementById('numero')

let valor = parseInt(numero.textContent) || 0;

suma.addEventListener('click', () => {
    valor ++;
    numero.textContent = valor;
})

resta.addEventListener('click', () => {
    valor --;
    numero.textContent = valor;
})