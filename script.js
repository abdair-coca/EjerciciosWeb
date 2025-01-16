const num = document.getElementById("numero")
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const reiniciar = document.getElementById("reiniciar");
let idinterval;
let cont = 1;

function prueba(){
    if(!idinterval){
        idinterval = setInterval(sumar,1000);
    }
}

function sumar(){
    num.textContent = cont;
    cont++;
}

function parar(){
    clearInterval(idinterval)
    idinterval = null;
}
function reset(){
    cont = 0;
    num.textContent = cont;
}


iniciar.addEventListener('click', prueba);
detener.addEventListener('click', parar);
reiniciar.addEventListener('click', reset);
