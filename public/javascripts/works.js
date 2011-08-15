$(document).ready(function(){
	var z = 5
   	$(".brokbiznes_circles").hover(function(){
		$(this).css("z-index",z);
		z++;
	});
});