const comida = document.getElementById("comida")
const bebida = document.getElementById("bebida")
var comentario = document.getElementById("comentarios")

var combo = document.getElementById("n_mesa");

/* var selected = combo.options[combo.selectedIndex].text; */

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{

    e.preventDefault()
   /*  let warnings ="" */

    if(comida.value != "" && bebida.value != "" && comentario.value != "" && combo.value != ""){
        
        /* alert("todos los campos estan completos B)->") */
        parrafo.innerHTML="Su pedido fue enviado"
    }else{

        /* alert(" hay  algun campo sin completar ") */
        parrafo.innerHTML= "complete todos los campos"
    }

})