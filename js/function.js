$(window).on('load', function () {
    var $predloader = $('#predloader');
    $predloader.delay(1650).fadeOut('slow');
});

$(document).ready(function() {   
    $(".loader").circularProgress({
        color: "#00db8b",
        line_width: 25,
        height: "350px",
        width: "350px",
        percent: 0
    }).circularProgress('animate', 100, 1500);
    
    for(var k=1;k<=4;k++) { topMenu("#part"+k,"#menu"+k,k); }
    
    for(var k=1;k<=6;k++) {
        for(var l=1;l<=6;l++) {
            menu("#m"+k+"part"+l,"#c"+k+"part"+l,l,k);
        }
    }        
            
    for(var j=1;j<=6;j++) {
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
        
        for(var i=1;i<=5;i++){
            for(var j=1;j<=5;j++){
                $("#c"+i+"part"+j).slideUp(300);
            }
        }
    });
    
//3d printers==========================================
{
//PART1
    printer("#c1part1", "img/printers/4.png", "AnyCubic","Reprap","200x200x200","200mm/c","Да","Да","USB, Card Reader");
        
    printer("#c1part1", "img/printers/1.png", "Prusha","Reprap","250x250x220","80mm/c","Да","Да","USB, Card Reader");
    
    printer("#c1part1", "img/printers/3.png", "H-Bot","H-Bot","300x300x300","120mm/c","Да","Да","USB, Card Reader");
    
//PART2        
    printer("#c1part2", "img/printers/4.png", "AnyCubic","Reprap","200x200x200","200mm/c","Да","Да","USB, Card Reader");
    
//PART3    
    printer("#c1part3", "img/printers/2.png", "SmartRap","Reprap","220x220x200","100mm/c","Да","Да","USB, Card Reader");
    
    printer("#c1part3", "img/printers/1.png", "Prusha","Reprap","250x250x220","80mm/c","Да","Да","USB, Card Reader");
    
//PART4
    printer("#c1part4", "img/printers/3.png", "H-Bot","H-Bot","300x300x300","120mm/c","Да","Да","USB, Card Reader");
    
    printer("#c1part4", "img/printers/1.png", "Prusha","Reprap","250x250x220","80mm/c","Да","Да","USB, Card Reader");
    
    printer("#c1part4", "img/printers/4.png", "AnyCubic","Reprap","200x200x200","200mm/c","Да","Да","USB, Card Reader");
        
    printer("#c1part4", "img/printers/2.png", "SmartRap","Reprap","220x220x200","100mm/c","Да","Да","USB, Card Reader");
}
//=====================================================
    
//3d models============================================
{
    model("#c2part1", "img/models/1.jpeg", "Форма для печенья. Свинка", "http://3dtoday.ru/api/download.php?MID=750202&FID=800268&H=f51d3bba29e52a0fbde251007b2e4bc2");
    
    model("#c2part1", "img/models/2.jpeg", "Фиксатор для пластикового окна", "http://3dtoday.ru/api/download.php?MID=749038&FID=798804&H=62f609045a1ada6036800005415feb7d");
    
    model("#c2part1", "img/models/4.jpeg", "Подставка под телефон", "http://3dtoday.ru/api/download.php?MID=748970&FID=798925&H=e8c2ea03d827c1d66fab043b35362d46");
    
    model("#c2part1", "img/models/5.jpeg", "Шестерня мясороубки VERTEX", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");

//PART2    
    model("#c2part2", "img/models/4.jpeg", "Подставка под телефон", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");
    
    model("#c2part2", "img/models/4.jpeg", "Подставка под телефон", "http://3dtoday.ru/api/download.php?MID=748970&FID=798925&H=e8c2ea03d827c1d66fab043b35362d46");
    
    model("#c2part2", "img/models/5.jpeg", "Шестерня мясороубки VERTEX", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");
    
//PART3
    model("#c2part3", "img/models/4.jpeg", "Подставка под телефон", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");
    
    model("#c2part3", "img/models/5.jpeg", "Шестерня мясороубки VERTEX", "http://3dtoday.ru/api/download.php?MID=748564&FID=797797&H=475616a0b0151855d18476a13e77b217");
    
    model("#c2part3", "img/models/1.jpeg", "Форма для печенья. Свинка", "http://3dtoday.ru/api/download.php?MID=750202&FID=800268&H=f51d3bba29e52a0fbde251007b2e4bc2");
    
    model("#c2part3", "img/models/2.jpeg", "Фиксатор для пластикового окна", "http://3dtoday.ru/api/download.php?MID=749038&FID=798804&H=62f609045a1ada6036800005415feb7d");
    
    model("#c2part3", "img/models/3.png", "Муфта для блендера PHB 0712L", "http://3dtoday.ru/api/download.php?MID=748789&FID=798126&H=f2b9d35241bbf73d8a7660e2881dba07");
    
//PART4    
    model("#c2part4", "img/models/6.jpeg", "Деталь оси Х", "http://3dtoday.ru/api/download.php?MID=143674&FID=359899&H=cad88c58a3f4eec868b0fa29ca83bd87");
    
    model("#c2part4", "img/models/7.jpeg", "Деталь натяжки ремня", "http://3dtoday.ru/api/download.php?MID=143676&FID=359907&H=1eff5fab1fa7de78fcb8c69f333a082e");
    
    model("#c2part4", "img/models/8.jpeg", "Деталь оси Х", "http://3dtoday.ru/api/download.php?MID=143671&FID=359885&H=25d1a890f49fe6f53517e9bcc382cb6a");
}
//=====================================================
    
});

function printer(thisName,imgLink,name,technology, size, speed, hotTable, display, interface){
    $(thisName).append("<div class='cols col-contb'> <b> <img class='printerImg' src='"+imgLink+"'> <h3>"+name+"</h3><hr> <p class='printerText'> Технология печати:<br>Область печати:<br>Скорость печати:<br>Подогрев платформы:<br>Дисплей:<br>Интерфейсы:<br> </p> <p class='printerInfo'>"+technology+"<br> "+size+"<br>"+speed+"<br>"+hotTable+"<br>"+display+"<br> "+interface+"<br></p> </b> </div>");
}

function model(thisName,imgLink,name,download) {
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