/**
 * Created by pepesan on 10/3/16.
 */
//función inicial cuando carga la página
//cualquier modificacióin de DOM debe ir aquí dentro {...}


function init(){
    console.log("Página cargada");
    $("p#parrafo").text("Hola Mundo!");
    //html() innerHTML JS
    $("p#parrafo").html("Hola Párrafo!");
    $("#midiv").html("<p>Otro contenido</p>");
    //injertos, añadir hijos
    //añade al final
    $("#menu").append("<li>5</li>");
    //añade al principio
    $("#menu").prepend("<li>0</li>");
    //Añade un hermano después del elemento seleccionado
    $("#menu > li:eq(3)").after("<ul><li>3.1</li><li>3.2</li></ul>");
    //Añade un hermano antes del elemento seleccionado
    $("#menu > li:eq(5)").before("<ul><li>4.1</li><li>4.2</li></ul>");
    //borrar elementos
    $("#borrar").remove();
    //manejo de propiedades CSS de un elemento
    //coger el valor de una propiedad
    var color=$("#maquetado").css("background-color");
    console.log(color);
    //cambiar el valor de una propiedad
    $("#maquetado").css("background-color","purple");
    $("#maquetado").css("color","white");
    //cambiar el valor de varias propiedades a la vez
    $("#maquetado").css({
        "background-color":"blue",
        "color":"grey"
    });
    //compruebo si un elemento tiene o no una clase
    if($("#clasista").hasClass("media")){
        console.log("Es clase media");
    }else{
        console.log("No es clase media");
    }
    //añado una clase al atributo class
    $("#clasista").addClass("obrera");
    //Quitar una clase del atributo class
    $("#clasista").removeClass("media");
    //Cambio de estado de una clase en un elemento
    //como está lo quita
    $("#clasista").toggleClass("obrera");
    //como no está presente lo pone
    $("#clasista").toggleClass("obrera");
    //oculta un elemento
    $("#clasista").hide();
    //muestra un elemento
    $("#clasista").show();

    //manejo de atributos de un elemento
    //coger el valor de un atributo de un elemento
    var id=$("#clasista").attr("id");
    console.log(id);
    //Cambiar el valor de un atributo
    $("#boton").attr("disabled","disabled");
    //Quitar un atributo
    $("#boton").removeAttr("disabled");
    //height, width y value
    $("#midiv").height("200px");
    $("#midiv").width("200px");
    //coger el valor del value de un campo
    var valor=$("#nombre").val();
    console.log(valor);
    valor=$("#area").val();
    console.log(valor);
    valor=$("#selecciona").val();
    console.log(valor);
}
//cuando se carga la página ejecuta la función init()
$(document).ready(init);

