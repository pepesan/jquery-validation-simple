/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init() {
    console.log('El DOM se ha cargado completamente');

    //Ejemplo 1
    $("#formulario").validate();

    //Ejemplo 2
    $("#formulario2").validate({
        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            // compound rule
            email: {
                required: true,
                email: true
            },
            comment:"required"
        }
    });
    //Ejemplo 3 Dependencias
    $("#formulario3").validate({
        rules: {
            email3: {
                required: {
                    depends: function (element) {
                        var status = false;
                        if ($("#subscribe:checked").val() !== undefined) {
                            var status = true;
                        }
                        //console.log("subscribe is: "+status);
                        return status;
                    }
                }
            }
        }
    });
    //Ejemplo 4 Mensajes
    $("#formulario4").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Please specify your name",
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        }
    });
    //Ejemplo 5, mensaje personalizado
    $("#formulario5").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
    //Ejemplo 6, sin validación onsubmit
    $("#formulario6").validate({
        name:{
            required:true
        },
        onsubmit: false
    });
    //Ejemplo 7, sin validación en onblur
    $("#formulario7").validate({
        name:{
            required:true
        },
        onfocusout: false
    });
    //Ejemplo 8, sin validación en onkeyup
    $("#formulario8").validate({
        name:{
            required:true
        },
        onkeyup: false
    });
}
$(document).ready(init);
//document.addEventListener("DOMContentLoaded",init);
//$(window).load(init);
//window.addEventListener("load",init);
