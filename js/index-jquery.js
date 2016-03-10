/**
 * Created by pepesan on 10/3/16.
 */
//función inicial cuando carga la página
//cualquier modificacióin de DOM debe ir aquí dentro {...}

/*
 Este código de aquí es igual al de abajo entero
 $(function() {
    console.log("Página cargada");
 });
 */

function init(){
    console.log("Página cargada");
}
//cuando se carga la página ejecuta la función init()
$(document).ready(init);
// esto permite definir un evento cuando la página está cargada completamente
function loaded(){
    console.log("Página completamente cargada");
}
$(window).load(loaded);
