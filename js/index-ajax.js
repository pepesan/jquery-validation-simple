function success(data){
    console.log("Ha ido todo guay");
    //console.log("Objetos devueltos: " +data);
    for (index in eval(data)){
        console.log(data[index].nombre);
        console.log(data[index].dipu);
        console.log(data[index].imagen);
    }
}
function showError(error){
    console.log("Ha petado");
    console.log("Error: "+ error);
}
$(document).ready ((event) => {
    console.log("Hola JQuery");
    // Llamada normal
    let url="https://cursosdedesarrollo.com/pactometro/resultados.json";
    /*
    $.ajax(url)
        .done(success)
        .fail(showError);
    */
    $.getJSON({
        url: url,
        dataType: "json",
        type: "get",
        success: success,
        error: showError
    });


});
