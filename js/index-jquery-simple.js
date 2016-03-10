/**
 * Created by pepesan on 10/3/16.
 */

function pulsado  (){
    $("p").hide();
}
function init (){
    //sólo es posible cuando el DOM está cargado
    $("button").click(pulsado);
}
$(document).ready(init);
