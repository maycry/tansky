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
	var $img = $('#experiments img');
    $("#experiments img").hover(mover,mleave);	
   	
   	$img.load(function(){
    	$(this).removeAttr("width")
           	.removeAttr("height")
           	.css({ width: "", height: "" });
 
    	var width  = $(this).width();
    	var height = $(this).height();
    	$(this).css({ width: width/3, height: height/3 });
	});
   	
   	function mover(){
		$(this).css("z-index",z);
		$(this).animate({
			width:'+=10',
			height:'+=10'},50);
		z++;
	}
	function mleave(){
		$(this).animate({
			width:'-=10',
			height:'-=10'},50);
	}
	
	$("#experiments img").click(function() {
		w = $(this).width()*2-10;
		h = $(this).height()*2-10;
		$(this).animate({
		width:'+='+w,
		height:'+='+h},50);
		open = true;
    });
    
});