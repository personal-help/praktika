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
            
    for(var j=1;j<=6;j++){
        for(var i=1;i<=6;i++){
            $("#c"+j+"part"+i).slideUp('slow');
            topMenu("#part"+5,"#menu"+5,5);
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
    });
    
    //3d models============================================
    model("#c2part1", "img/models/1.jpeg", "Форма для печенья. Свинка", "http://3dtoday.ru/api/download.php?MID=750202&FID=800268&H=f51d3bba29e52a0fbde251007b2e4bc2");
    
    model("#c2part1", "img/models/2.jpeg", "Фиксатор для пластикового окна", "http://3dtoday.ru/api/download.php?MID=749038&FID=798804&H=62f609045a1ada6036800005415feb7d");
    
    model("#c2part1", "img/models/3.png", "Муфта для блендера PHB 0712L", "http://3dtoday.ru/api/download.php?MID=748789&FID=798126&H=f2b9d35241bbf73d8a7660e2881dba07");
    
    model("#c2part1", "img/models/4.jpeg", "Подставка под телефон", "http://3dtoday.ru/api/download.php?MID=748970&FID=798925&H=e8c2ea03d827c1d66fab043b35362d46");
    
    model("#c2part1", "img/models/5.jpeg", "Шестерня мясороубки VERTEX", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");
    
    
    //=====================================================
});

function model(thisName,imgLink,name,download){
    $(thisName).append("<div class='cols col-model'> <img class='modelImg' src='"+imgLink+"'> <p class='motelText'> "+name+"  </p> <a href='"+download+"'> <div class='modelDownload'> Скачать </div></a> </div>");
}

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