const botonGenerar = document.getElementById("generar-boton");
const textoRGB = document.querySelector("body main #adivinar-cont #rgb-generado");
const cuadro1 = document.querySelector(`body main #adivinar-cont #opciones-cuadros-cont #cuadro-1`);
const cuadro2 = document.querySelector(`body main #adivinar-cont #opciones-cuadros-cont #cuadro-2`);
const cuadro3 = document.querySelector(`body main #adivinar-cont #opciones-cuadros-cont #cuadro-3`);
const cuadrosopciones = document.querySelectorAll(".opciones-cuadros");
const Reintentar = document.getElementById("reintento");
Reintentar.style.display = "none";
const botonReintentar = document.getElementById("boton-reintentar");
let cuadroElegidoreal;


function generarColor(){

     //Generar un numero entre 1-3 para escoger el cuadro ganador
    let cuadroAleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
 
     //seleccionamos el cuadro elegido aleatoriamente
    const cuadroElegido = document.querySelector(`body main #adivinar-cont #opciones-cuadros-cont #cuadro-${cuadroAleatorio}`);


    //Generamos el rgb aleatorio
    let a= Math.floor(Math.random() * 255);
    let b= Math.floor(Math.random() * 255);
    let c= Math.floor(Math.random() * 255);

    cuadroElegido.style.backgroundColor = `RGB(${a},${b},${c})`;

    textoRGB.textContent = `RGB(${a},${b},${c})`;

    //generamos el color de los otros cuadros de forma aleatoriamente

    for(let i=1; i<=3; i++){  
        if(i === cuadroAleatorio){
            if(i==3){
                break;
            }
            i++;
        }
        const cuadroNoElegido = document.querySelector(`body main #adivinar-cont #opciones-cuadros-cont #cuadro-${i}`);

        a= Math.floor(Math.random() * 255);
        b= Math.floor(Math.random() * 255);
        c= Math.floor(Math.random() * 255);

        cuadroNoElegido.style.backgroundColor = `RGB(${a},${b},${c})`;
    }
    return cuadroElegido;
}

botonGenerar.addEventListener('click', ()=>{
    cuadroElegidoreal  = generarColor();
});
cuadro1.addEventListener('click', ()=>{
    if(cuadro1.style.backgroundColor == cuadroElegidoreal.style.backgroundColor){
        alert("ganaste");
    }else{
        cuadrosopciones.forEach((elemento) => {
            elemento.style.display = "none"; // Aplicar display: none
          });
          
    Reintentar.style.display = "block";
    }
});
cuadro2.addEventListener('click', ()=>{
    if(cuadro2.style.backgroundColor == cuadroElegidoreal.style.backgroundColor){
        alert("ganaste");
    }else{
        cuadrosopciones.forEach((elemento) => {
            elemento.style.display = "none"; // Aplicar display: none
          });
    Reintentar.style.display = "block";
    }
});
cuadro3.addEventListener('click', ()=>{
    if(cuadro3.style.backgroundColor == cuadroElegidoreal.style.backgroundColor){
        alert("ganaste");
    }else{
        cuadrosopciones.forEach((elemento) => {
            elemento.style.display = "none"; // Aplicar display: none
          });
          
    Reintentar.style.display = "block";
    }
});
botonReintentar.addEventListener('click', ()=>{
    cuadroElegidoreal  = generarColor();
    cuadrosopciones.forEach((elemento) => {
        elemento.style.display = "block"; // Aplicar display: non
      })
    Reintentar.style.display = "none";
})

