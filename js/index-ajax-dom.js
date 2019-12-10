class Partido{
    constructor(nombre = "", dipu =0, imagen= "") {
        this.nombre=nombre;
        this.dipu=dipu;
        this.imagen=imagen;
    }
}

function success(data){
    console.log("Ha ido todo guay");
    //console.log("Objetos devueltos: " +data);
    let listado =[];
    for (index in data){
        let partido =
            new Partido(
                data[index].nombre,
                data[index].dipu,
                data[index].imagen);
        listado.push(partido);
    }
    for (index in listado){
        console.log(listado[index]);
        $("#botones_partidos")
            .append(
                "<button id='part-" +listado[index].nombre+"'"+
                "data-nombre='"+listado[index].nombre+"'" +
                "data-dipu='"+listado[index].dipu+"'" +
                "data-imagen='"+listado[index].imagen+"'" +
                ">" +
                "<img src='http://cursosdedesarrollo.com/pactometro/img/"+listado[index].imagen+"'/>"
                +"<h2>"+listado[index].dipu+"</h2>"+
                "</button>");
        $("#table_partidos").append(
            "<tr>" +
                "<td>"+listado[index].nombre+"</td>"+
                "<td>"+listado[index].dipu+"</td>"+
                "<td><img src='https://cursosdedesarrollo.com/pactometro/img/"+listado[index].imagen+"'/></td>"+
            "</tr>"
        )
    }
    $("#partidos li").click((evento)=>{
        console.log($(evento.currentTarget).attr("data-nombre"));
    })
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
