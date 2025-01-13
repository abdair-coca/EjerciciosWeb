const textoEntrada = document.getElementById("texto-entrada");
const botonEntrada = document.getElementById("agregar-tarea");
const textoBuscar = document.getElementById("buscador");
const botonBuscar = document.getElementById("boton-buscar");
const listaol = document.getElementById("lista");
let cont = 0;

function creartarea(cont){
    const texto = textoEntrada.value;

    /*<li>nueva tarea 
    <div id="tarea">
    <button id="eliminar">Eliminar</button> 
        <label for="checkbox">Completada</label>
        <input type="checkbox" name="checkbox" id="checkbox">
    </div>
    </li>*/
    if(texto !== ""){
        const nuevoLi = document.createElement('li');
        const nuevoDiv = document.createElement('div');
        const nuevoBoton = document.createElement('button');
        const nuevoLabel = document.createElement('label');
        const nuevoinput = document.createElement('input');

    nuevoBoton.textContent = "Eliminar";
    nuevoLabel.textContent = "Completada";
    nuevoLabel.setAttribute("for", `checkbox-${cont}`);
    nuevoinput.type = "checkbox";
    nuevoinput.name = `checkbox-${cont}`;
    nuevoinput.id = `checkbox-${cont}`;

        nuevoLi.textContent = texto;
        listaol.appendChild(nuevoLi);

        nuevoLi.appendChild(nuevoDiv);

        nuevoDiv.appendChild(nuevoBoton)

        nuevoDiv.appendChild(nuevoLabel);

        nuevoDiv.appendChild(nuevoinput);


        nuevoBoton.addEventListener('click', ()=>{
            listaol.removeChild(nuevoLi);
        })

        textoEntrada.value = "";
        textoEntrada.focus();

    }
    else {
        alert("error")
        textoEntrada.focus();
    }
}

function buscando (){
    const elementos = listaol.getElementsByTagName("li")
    const filtro = textoBuscar.value.toLowerCase();

    for (const elemento of elementos){
        const texto = elemento.textContent.toLowerCase();

        if(texto.includes(filtro)){
            elemento.classList.remove("oculto");
        }else{
            elemento.classList.add("oculto");
        }
    }
    textoBuscar.value = "";
    textoBuscar.focus();
}

function entrada (){
        const arrayTareas = [];
        arrayTareas[cont] =  creartarea(cont);
        cont ++;
}

textoEntrada.addEventListener('keypress', function e(){
    if(e.key === 'Enter'){
        entrada();
    }
})


botonBuscar.addEventListener('click', buscando);

botonEntrada.addEventListener('click', entrada);