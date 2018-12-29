$(window).on('load', function() {
    var $predloader = $('#predloader');
    $predloader.delay(1650).fadeOut('slow');
});

$(document).ready(function() {   
    $(".loader").circularProgress({
        color: "#00db8b",
        line_width: 25,
        height: "350px",
        width: "350px",
        percent: 0,
    }).circularProgress('animate', 100, 1500);
    
    for(var k=1;k<=4;k++) { topMenu("#part"+k,"#menu"+k,k); }
    
    for(var k=1;k<=6;k++){
        for(var l=1;l<=6;l++) {
            menu("#m"+k+"part"+l,"#c"+k+"part"+l,l,k);
        }
    }
    
        $(".login").bind("click", function() {
            $(".cols.col-logMenu").slideDown(500);
        });

        $(".buttIn").bind("click", function() {
            $(".cols.col-logMenu").slideUp(500);
        });   
    
        $("#part5").bind("click", function() {
            $("#news").slideDown('slow');
            
            for(var j=1;j<=6;j++){
                for(var i=1;i<=6;i++){
                    $("#c"+j+"part"+i).slideUp('slow');
                    topMenu("#part"+5,"#menu"+5,5);
                }
            }
        });
});

function topMenu(thisName,forName,num) {
    $(thisName).bind("click", function(){ for(var i=1;i<=5;i++){if(i!=num){
        if($("#menu"+i)!=""){ $("#menu"+i).hide('fast'); } $(forName).slideDown('slow');}}});
}

function menu(thisName,forName,num,num2) {        
    $(thisName).bind("click",function() { 
        $(forName).slideDown('slow');
        for(var j=1;j<=6;j++){
            for(var i=1;i<=6;i++){if(i!=num || j!=num2) {
                if($("#c"+j+"part"+i)!="") { $("#news").slideUp('slow'); $("#c"+j+"part"+i).slideUp('slow');} 
    $(forName).slideDown('slow');}}}});  
}