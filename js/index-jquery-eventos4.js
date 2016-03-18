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
    if($("#campo").val()!="" && $("#campo2").val()!=""){
        console.log("Los campos está rellenado!");
    }else{
        evento.preventDefault();
        console.log("Al menos uno de los campos está vacío!");
    }
}
function dentro(){
    console.log("dentro");
}
function encima(){
    console.log("encima");
}
function fuera(){
    console.log("fuera");
}
function init(){
    console.log("Página cargada");
    $("#enlace").click(pulsado);
    $("#enlace").mouseover(dentro);
    $("#enlace").mousemove(encima);
    $("#enlace").mouseleave(fuera);
    $("#formulario").submit(enviado);
}
//cuando se carga la página ejecuta la función init()
$(document).ready(init);
