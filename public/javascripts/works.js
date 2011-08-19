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
			$(this).css("z-index",z);
			$(this).animate({
				width:'+=10',
				height:'+=10'},times);
			z++;
		}
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
});