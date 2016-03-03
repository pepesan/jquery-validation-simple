/**
 * Created by pepesan on 3/3/16.
 */
function init(){
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypes" ).val();

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
            options = { percent: 0 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }

        // run the effect
        $( "#effect" ).hide( selectedEffect, options, 1000, callback );
    };

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function() {
            $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
        }, 1000 );
    };

    // set effect from select menu value
    $( "#button" ).click(function() {
        runEffect();
    });
}

$(document).ready(init);
