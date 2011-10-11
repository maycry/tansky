$(document).ready(function(){
	var z = 5
   	$(".brokbiznes_circles").hover(function(){
		$(this).css("z-index",z);
		z++;
	});
	
	var z = 1000;
	var open = false;
	var w = 0;
	var h = 0;
	var time = 90;
	var times = 70;
	
    $("#experiments img").hover(mover,mleave);	
   	
   	function mover(){
   		if (!$(this).hasClass("opened")) {
			$(this).animate({
				width:'+=10',
				height:'+=10'},times);
		}
		$(this).css("z-index",z);
		z++;
	}
	function mleave(){
		if (!$(this).hasClass("opened")) {
			$(this).animate({
				width:'-=10',
				height:'-=10'},times);
			}
	}
	
	$("#experiments img").click(function() {
		if ($(this).hasClass("opened")) {
			w = $(this).width()/3;
			h = $(this).height()/3;
			$(this).animate({
			width:w,
			height:h},time);
			open = false;
			$(this).removeClass("opened");
		} else {
			$(this).removeAttr("width")
           	.removeAttr("height")
           	.css({ width: "", height: "" });
 
	    	var width  = $(this).width();
	    	var height = $(this).height();
	    	$(this).css({ width: width/3, height: height/3 });

			$(this).animate({
			width:width,
			height:height},time);
			open = true;
			$(this).addClass("opened");	
		}	
    });
    
    
	window.onload = init; 
	window.onresize = init;
	// Функция показывающая ширину экрана, прикольно же.
	function ShowUsScreenWidth(){
	    var fmt = document.documentElement.clientWidth;
	    fmt = fmt - (fmt % 10);
	    document.getElementById('count').innerHTML=fmt+'px';
	}
	
	var g_count=5; // дефолтное кол-во колонок, генерируемое на сервере
	
	
	function init(){
	    g_result=document.getElementById("mytable");
	    if(g_result){
	        g_tds=g_result.getElementsByTagName("td");
	        window.onresize=resize;
	        resize();
	    }
	}
	// Считаем кол-во колонок, которое помещается в экран
	function CountColumns(){
	    var c=Math.floor(document.documentElement.offsetWidth/(230));
	    return c>0?c:1;
	    }
	    
	function resize(){
	    ShowUsScreenWidth(); //обновляем значение ширины экрана, не относится к скрипту
	    var cols=CountColumns();// кол-во столбцов в таблице
	    if(g_count==cols){return;}//ничего не делать, если кол-во колонок то же, что и ранее
	    g_count=cols; 
	    var table=document.createElement("table");
	    var tbody=document.createElement("tbody");
	    var rows=g_tds.length/cols; // считаем кол-во строк в таблице
	    var width=100/cols; // ширина каждой ячейки в процентах
	    for(var j=0;j<rows;j++){
	        var row1=document.createElement("tr");
	        for(var i=0;i<cols;i++){
	            if(!g_tds[0]){break;}
	            g_tds[0].style.width=width+"%";
	            row1.appendChild(g_tds[0]);
	        }
	        tbody.appendChild(row1);
	    }
	    table.appendChild(tbody);
	    table=g_result.appendChild(table);// добавляем новую таблицу
	    var prev=table.previousSibling;
	    if(prev!=null)prev.parentNode.removeChild(prev);// удаляем старую таблицу
	    
	}
	
	
	window.onresize = CountColumnsAndSetClass;
	window.onload = CountColumnsAndSetClass;
	
	function CountColumnsAndSetClass(){
	    var c=Math.floor(document.documentElement.offsetWidth/(300));
	    cc = c>0?c:1;
	    document.getElementById('floats').className = 'columns' + cc;
	    }

});

