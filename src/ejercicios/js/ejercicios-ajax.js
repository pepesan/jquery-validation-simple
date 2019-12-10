function success(data){
    console.log("Ha ido todo guay");
    //console.log("Objetos devueltos: " +data);
    for (index in eval(data)){
        console.log(data[index].nombre);
        $("#resultados")
            .append(
                "<p>" +
                data[index].nombre+
                "</p>")
    }
}
function showError(error){
    console.log("Ha petado");
    console.log("Error: "+ error);
}
$(document).ready(()=>{
    console.log("dom cargado");
    $("#getAjax").click(()=>{
        console.log("boton pulsado");
        $.ajax({
            type: "get",
            url: "titulo.html",
            success: (data)=>{
                console.log(data);
                $("#resultados").append(data);
            },
            error: (e)=>{
                console.log("error: "+ e);
            }
        })
    });
    let url = "https://cursosdedesarrollo.com/pactometro/resultados.json";
    $("#cogePartidos").click(()=>{
        $.getJSON({
            url: url,
            dataType: "json",
            type: "get",
            success: success,
            error: showError
        });
    });
});
