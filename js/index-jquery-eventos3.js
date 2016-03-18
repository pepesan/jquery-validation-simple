/**
 * Created by pepesan on 10/3/16.
 */
//función inicial cuando carga la página
//cualquier modificacióin de DOM debe ir aquí dentro {...}

var app={
    focuseado:function (){
        console.log("el elemento ha sido focuseado");
    },
    pulsado:function (evento){
        //console.log("Pulsado!");
        console.log(evento.currentTarget.id);
        if(evento.currentTarget.id=="boton1"){
            console.log("Pulsado el botón 1!");
        }else{
            console.log("Pulsado el botón 2!");
        }
    },
    sale:function (){
      console.log("Ha salido del foco")
    },
    init:function (){
        console.log("Página cargada");
        /*
        $("#boton1").click(app.pulsado);
        $("#boton2").click(app.pulsado);
        */
        $("button").click(app.pulsado);
        $("#campo").focus(app.focuseado);
        $("#campo").blur(app.sale);

    }
};

//cuando se carga la página ejecuta la función init()
$(document).ready(app.init);
