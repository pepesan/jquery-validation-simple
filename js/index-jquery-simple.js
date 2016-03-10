/**
 * Created by pepesan on 10/3/16.
 */
function pulsado (){
    $("p").hide();
}
function init(){
    $("button").click(pulsado);
}
$(document).ready(init);
