/**
 * Created by pepesan on 10/3/16.
 */
//función inicial cuando carga la página
//cualquier modificacióin de DOM debe ir aquí dentro {...}

function init(){
    console.log("Página cargada");
    $("p").css("background-color","red");
    $("#segundo").css("background-color","blue");
    $(".tercera").css("background-color","green");
    $("p.otra").css("background-color","pink");
    $("#cabecera,#pie").css("background-color","yellow");
    $("#cuerpo p").css("background-color","purple");
    $("[href]").css("background-color","green");
    $("[href='http://google.es/']").css("background-color","orange");
    $("a[href!='http://google.es/']").css("background-color","pink");
    $("[href^='http://']").css("background-color","green");
    $("[href$='.es/']").css("background-color","red");
    $("#primero li:first").css("background-color","purple");
    $("#primero li:last").css("background-color","purple");
    $("#primero li:first-child").css("background-color","red");
    $("#menu li:even").css("background-color","grey");
    $("#menu li:odd").css("background-color","pink");
    $("#menu2 li:eq(1)").css("background-color","pink");
    $("#menu2 li:eq(3)").css("background-color","green");
    $("#menu2 li:eq(0)").css("background-color","blue");
    $("#menu2 li:gt(5)").css("background-color","red");
    $("#menu2 li:lt(3)").css("background-color","red");
    $(":header").css("background-color","purple");

    //$(":visible").hide();
    //$(":hidden").show();
    $(":input").css("background-color","purple");

}
//cuando se carga la página ejecuta la función init()
$(document).ready(init);

