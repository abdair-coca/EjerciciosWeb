const texto = document.getElementById("texto")
const boton = document.getElementById("enviar")
const eliminar = document.getElementsByClassName("eliminar")
let contador = 1;

boton.addEventListener('click', () =>{

    const newtexto = texto.value;
     
    if(newtexto === ""){
        alert("error, ingrese algo");
        return;
    }
    
        const nuevoli = document.createElement("li");

        nuevoli.textContent = newtexto;

        const lista = document.getElementById("espacio");
        
        const newboton = document.createElement("button");
        newboton.textContent = "eliminar";
        newboton.classList.add("eliminar");

        newboton.addEventListener('click',()=>{
            lista.removeChild(nuevoli);
            })

        nuevoli.appendChild(newboton);

        
        lista.appendChild(nuevoli);

        texto.value="";

        contador ++;
})
