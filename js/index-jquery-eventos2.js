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
    /*
    activate: function () {
        //console.log("Evento OnBlur");
        $("#campo").toggleClass("active");
    },
    activate2: function () {
        //console.log("Evento OnBlur");
        $("#campo2").toggleClass("active");
    },
    */
    activateGeneric: function(evento){
        $(evento.currentTarget).toggleClass("active");
        console.log(evento.currentTarget);
    },
    init:function (){
        console.log("Página cargada");
        /*
        $("#campo").focus(app.activateGeneric);
        $("#campo").blur(app.activateGeneric);
        $("#campo2").focus(app.activateGeneric);
        $("#campo2").blur(app.activateGeneric);
        */
        $("input").focus(app.activateGeneric);
        $("input").blur(app.activateGeneric);
    },
    loaded:function (){
        console.log("Página completamente cargada");
    }
};

//cuando se carga la página ejecuta la función init()
$(document).ready(app.init);
// esto permite definir un evento cuando la página está cargada completamente

$(window).load(app.loaded);
