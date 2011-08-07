$(document).ready(function() {
	
	var acss = Array(); 
    var count = $("#works > a").size() - 1;
    var current = 0;
	var current_next = 1;
	var current_inv = 2;
    

   /* $("#works a img").each(function(index) {
    	if (index != current) {
    		$(this).css("width", "300px");
    		$(this).css("height", "300px");
    	};
	});*/
	
	
	$("#prev").click(function() {
		$("#works a img").each(function(index) {
    		$(this).removeClass("center");
    		$(this).removeClass("left");
    		$(this).removeClass("right");
    		$(this).removeClass("out");
		});
		
		$("#header").html(current+":"+current_next+":"+current_inv);
		
		
		$("#works a img").each(function(index) {
			//$(this).removeAttr('style');
			$(this).css("right", "300%");
			if ((index==current) || (index==current_next) || (index==current_inv)) {
				$(this).css("right", "");
			};
		});
		
		$("#works a img").eq(current).css("left", "");
		$("#works a img").eq(current).css("right", "90%");
		$("#works a img").eq(current_next).css("left", "50%");
		/*$("#works a img").eq(current_next).animate({
			left: '+=50%'},
			500);*/
		$("#works a img").eq(current_inv).css("left", "90%");
		
		current++;
		if (current>count) {
			current = 0;
		};
		
		current_next++;
		if (current_next > count) {
			current_next = 0;
		};
		
		current_inv++;
		if (current_inv > count) {
			current_inv = 0;
		};
		
    });
    
});