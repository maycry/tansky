$(document).ready(function() {
	
	var acss = Array(); 
    var count = $("#works > a").size() - 1;
    var current = 0;
	var current_next = 1;
	var current_inv = 2;
	var current_last = count;
	var can_click = true;
	
	$("#works a img").each(function(index) {
    	if (index != current) {
    		$(this).css("width", "300px");
    		$(this).css("height", "300px");
    	};
	});	
	
	function denyClick(){
		can_click = true;
	}
	
	function nextClick() {
		can_click = false;
		$("#works a img").each(function(index) {
			$(this).removeClass("center");
    		$(this).removeClass("left");
    		$(this).removeClass("right");
    		$(this).removeClass("out");
		});		
		
		$("#works a img").eq(current_last).css({"right" : "90%", "left" : ""});
		$("#works a img").eq(current).css({"right" : "50%", "left" : "", "margin-left" : "", "margin-right" : "-300px"})
		$("#works a img").eq(current_next).css({"right" : "", "left" : "90%"});
		$("#works a img").eq(current_inv).css({"right" : "", "left" : "100%"});
		
		$("#works a img").eq(current_last).animate({
			right: '+=10%'},
			100);
		$("#works a img").eq(current).animate({
			right: '+=40%',
			width: '-=300',
			height: '-=300',
			'margin-right': '+=300'},
			400);
		$("#works a img").eq(current_next).animate({
			left: '-=40%',
			width: '+=300',
			height: '+=300',
			'margin-left': '-=300'},
			400);
		$("#works a img").eq(current_inv).delay(200).animate({
			left: '-=10%'},
			100);
			
		window.setTimeout(denyClick, 400);
		
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
		current_last++;
		if (current_last > count) {
			current_last = 0;
		};
	}

	$("#prev").click(function() {
		if (can_click) {
			nextClick();	
		};
    });
    
});