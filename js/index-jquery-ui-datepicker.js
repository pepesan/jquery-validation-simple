/**
 * Created by pepesan on 3/3/16.
 */
function init(){
    $( "#datepicker" ).datepicker();
    //$( "#datepicker" ).datepicker( "option", "showAnim", "fadeIn" );

    function anima() {
        $( "#datepicker" ).datepicker( "option", "showAnim", $(this).val() );
    }
    $( "#anim" ).change(anima);


}

$(document).ready(init);
