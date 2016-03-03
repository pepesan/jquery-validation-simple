/**
 * Created by pepesan on 3/3/16.
 */
function init(){
    $( document ).tooltip();
    $( "#animado" ).tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        },
        hide: {
            effect: "slideUp",
            delay: 250
        }
    });
}

$(document).ready(init);
