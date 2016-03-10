/**
 * Created by pepesan on 10/3/16.
 */
var app={
    pulsado:function  (){
        $("p").hide();
    },
    init:function (){
        $("button").click(app.pulsado);
    }
};

$(document).ready(app.init);
