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
    ponFondoNegro:function(){
        //console.log("Han pulsado el sgundo botón");
        //$("#fondo").css("background-color","black");
        $("#fondo").attr("class","");
        $("#fondo").addClass("negro");
    },
    ponFondoRojo:function(){
        //console.log("Han pulsado el sgundo botón");
        //$("#fondo").css("background-color","red");
        $("#fondo").attr("class","");
        $("#fondo").addClass("rojo");
    },
    ponFondoAzul:function (){
        //console.log("Me han pulsado");
        //$("#fondo").css("background-color","blue");
        $("#fondo").attr("class","");
        $("#fondo").addClass("azul");
    },
    init:function (){
        console.log("Página cargada");
        $("#rojo").click(app.ponFondoRojo);
        $("#azul").click(app.ponFondoAzul);
        $("#negro").click(app.ponFondoNegro);
    },
    loaded:function (){
        console.log("Página completamente cargada");
    }
};

//cuando se carga la página ejecuta la función init()
$(document).ready(app.init);
// esto permite definir un evento cuando la página está cargada completamente

$(window).load(app.loaded);
