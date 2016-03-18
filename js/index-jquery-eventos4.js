/**
 * Created by pepesan on 10/3/16.
 */
//función inicial cuando carga la página
//cualquier modificacióin de DOM debe ir aquí dentro {...}

function pulsado(evento){
    evento.preventDefault();
    console.log("pulsado");
}
function enviado(evento) {
    console.log("Formulario secuestrado");
    console.log($("#campo").val());
    if($("#campo").val()!=""){
        console.log("El campo está rellenado!");
    }else{
        evento.preventDefault();
        console.log("El campo está vacío!");
    }
}
function init(){
    console.log("Página cargada");
    $("#enlace").click(pulsado);
    $("#formulario").submit(enviado);
}
//cuando se carga la página ejecuta la función init()
$(document).ready(init);
