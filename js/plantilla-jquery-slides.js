/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init() {
    /*
     width (number) & height (number)
     Set width and height of the slideshow.
     This must be defined.
     start (number)
     Set the first slide in the slideshow.
     Default value is 1.
     navigation (object)
     Next and previous button settings.
     pagination (object)
     Pagination settings
     play (object)
     Play and stop button setting.
     effect (object)
     Effects setting.
    */
    $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: {
            effect: "slide"
        },
        pagination: {
            effect: "slide"
        },
        effect: {
            slide: {
                speed: 400
            }
        }
    });
}
$(document).ready(init);
