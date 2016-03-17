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
var app={
    segundoClick:function(){
        console.log("Han pulsado el sgundo botón");
    },
    clickado:function (){
        console.log("Me han pulsado");
    },
    init:function (){
        console.log("Página cargada");
        $("#boton").click(app.clickado);
        $("#boton2").click(app.segundoClick);
    },
    loaded:function (){
        console.log("Página completamente cargada");
    }
};

//cuando se carga la página ejecuta la función init()
$(document).ready(app.init);
// esto permite definir un evento cuando la página está cargada completamente

$(window).load(app.loaded);
