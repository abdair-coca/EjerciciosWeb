const color = document.getElementById('color');
const boton = document.querySelector('button');

function cambiarcolor(){
    let combinacion = "123456789ABCDEF";
    let colorGenerado = "#";
    for(let i = 0; i < 6; i++){
        let numeroaletorio = Math.floor(Math.random() * 15);
        colorGenerado += combinacion[numeroaletorio];
    }

    return colorGenerado;
}

boton.addEventListener('click', function(){
    let nuevoColor = cambiarcolor();
    color.textContent = nuevoColor;
    document.body.style.backgroundColor = nuevoColor;
})
