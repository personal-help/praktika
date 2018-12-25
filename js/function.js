$(window).on('load',function(){
    var $predloader = $('#predloader');
    $predloader.delay(1650).fadeOut('slow');
});

$(document).ready(function(){   
    $(".loader").circularProgress({
        color: "#00db8b",
        line_width: 25,
        height: "350px",
        width: "350px",
        percent: 0,
    }).circularProgress('animate', 100, 1500);
});