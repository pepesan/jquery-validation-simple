var app={
    valida_form: function (evento) {
        evento.preventDefault();
        console.log("Evento evitado");
        //comprobar si el formulario valida
        let valor_username = $("#login_username").val();
        let valor_contraseña = $("#login_password").val();
        if (valor_username != "" && valor_contraseña != "") {
            console.log("El formulario valida");
        } else {
            console.log("El formulario no valida");
        }

    },
    init: function () {
        console.log("Hola Jquery");
        $("#login_form").submit(app.valida_form);
    }
};



$(document).ready(app.init);
