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
    $("#formulario9").validate({
        rules:{
            name:{
                required:true
            },
            lastname:{
                required:true
            }
        },
        groups: {
            username: "name lastname"
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "name" || element.attr("name") == "lastname" ) {
                error.insertBefore("#primer");
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#formulario10").validate({
        rules:{
            nombre:{
                required:true,
                rangelength: [5, 10],
                //minlength:5,
                //maxlength:10
            }
        }

    });
    $("#formulario11").validate({
        rules:{
            plazo:{
                required:true,
                number: true,
                min: 12,
                max: 36
            }
        }

    });
    $("#formulario12").validate({


    });
    $("#formulario13").validate({
    });
    $("#formulario14").validate({
        /*
        rules:{
            web:{
                required:true,
                url:true
            }
        }
        */
    });
    $("#formulario15").validate({
        /*
         rules:{
             web:{
                 required:true,
                 url:true
             }
         },
         */
        messages:{
            web:{
                required:"Alguna web tendrás no? Venga pon una!",
                //url:"Anda pon una URL válida! Pero güena ehh?"
            }
        }
    });
    $("#formulario16").validate({
        /*
         rules:{
             fecha:{
                 required:true,
                 date:true
             }
         },
        */
        messages:{
            fecha:{
                required:"Es necesario meter una fecha!",
                date:"El modelo de fecha es dd/mm/aaaa"
            }
        }
    });

    $.validator.addMethod("miValidador", function (value, element, options)
        {
            //se debe devolver true si valida, false si no
            return false;
        },
        "Esto no valida"
    );
    $("#formulario17").validate({
         rules:{
             name:{
                 required:true,
                 miValidador:true
             }
         },

    });
    //validador personalizado de una url que empiece por un determinado dominio
    $.validator.addMethod("domain", function(value, element) {
        return this.optional(element) || /^http:\/\/mycorporatedomain.com/.test(value);
    }, "Please specify the correct domain for your documents");
    //saber si un número está entre dos valores que se pongan como valor
    $.validator.addMethod("math", function(value, element, params) {
        return this.optional(element) || value == params[0] + params[1];
    }, jQuery.validator.format("Please enter the correct value for {0} + {1}"));
}
$(document).ready(init);
/*
 required – Makes the element required.
 remote – Requests a resource to check the element for validity.
 minlength – Makes the element require a given minimum length.
 maxlength – Makes the element require a given maxmimum length.
 rangelength – Makes the element require a given value range.
 min – Makes the element require a given minimum.
 max – Makes the element require a given maximum.
 range – Makes the element require a given value range.
 email – Makes the element require a valid email
 url – Makes the element require a valid url
 date – Makes the element require a date.
 dateISO – Makes the element require an ISO date.
 number – Makes the element require a decimal number.
 digits – Makes the element require digits only.
 creditcard – Makes the element require a credit card number.
 equalTo – Requires the element to be the same as another one
 */