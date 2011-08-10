$(document).ready(function() {
	
	var acss = Array(); 
    var count = $("#works > a").size() - 1;
    var current = 0;
	var current_next = 1;
	var current_inv = 2;
	var current_invp = count-1;
	var current_last = count;
	var can_click = true;
	var i = 0;
	var img_size = 500;
	var img_size2 = img_size/2;
	var img_size4 = img_size2/2;
	
	$("#works a img").each(function(index) {
    	if (index != current) {
    		$(this).css("width", img_size2);
    		$(this).css("height", img_size2);
    	};
	});	
	
	function denyClick(){
		can_click = true;
	}
	
	function changeTitle(current){
		var title = $("#works a img").eq(current).attr("alt");
		var href = $("#works a").eq(current).attr("href");
		$("#worktitle a").fadeOut(275).fadeIn(275);
		window.setTimeout(function(){$("#worktitle a").html(title);
		$("#worktitle a").attr('href', href);}, 275);
	}
	
	function nextClick() {
		can_click = false;
		$("#works a img").each(function(index) {
			$(this).removeClass("center");
    		$(this).removeClass("left");
    		$(this).removeClass("right");	
		});		
		
		$("#works a img").eq(current_last).css({"right" : "90%", "left" : "", "margin-top" : img_size4});
		$("#works a img").eq(current).css({"right" : "50%", "left" : "", "margin-left" : "", "margin-right" : -img_size2, "margin-top" : "0"});
		$("#works a img").eq(current_next).css({"right" : "", "left" : "88%", "margin-top" : img_size4});
		$("#works a img").eq(current_inv).removeClass("out").css({"right" : "", "left" : "100%", "margin-top" : img_size4});
		
		$("#works a img").eq(current_last).animate({
			right: '+=10%'},
			200);
		$("#works a img").eq(current).animate({
			right: '+=38%',
			width: '-='+img_size2,
			height: '-='+img_size2,
			'margin-right': '+='+img_size2,
			'margin-top': '+='+img_size4},
			550);
		$("#works a img").eq(current_next).animate({
			left: '-=38%',
			width: '+='+img_size2,
			height: '+='+img_size2,
			'margin-left': '-='+img_size2,
			'margin-top': '-='+img_size4},
			550);
		$("#works a img").eq(current_inv).delay(200).animate({
			left: '-=10%'},
			200);
			
		window.setTimeout(denyClick, 550);
		
		current++;
		if (current>count) {
			current = 0;
		};
		
		changeTitle(current);
		
		current_next++;
		if (current_next > count) {
			current_next = 0;
		};
		
		current_inv++;
		if (current_inv > count) {
			current_inv = 0;
		};
		
		current_invp++;
		if (current_invp > count) {
			current_invp = 0;
		};
		
		current_last++;
		if (current_last > count) {
			current_last = 0;
		};
	}

	function prevClick() {
		can_click = false;
		$("#works a img").each(function(index) {
			$(this).removeClass("center");
    		$(this).removeClass("left");
    		$(this).removeClass("right");
		});		
		
		$("#works a img").eq(current_last).css({"right" : "88%", "left" : "", "margin-top" : img_size4});
		$("#works a img").eq(current).css({"right" : "", "left" : "50%", "margin-left" : -img_size2, "margin-right" : "", "margin-top" : "0"});
		$("#works a img").eq(current_next).css({"right" : "", "left" : "90%", "margin-top" : img_size4});
		$("#works a img").eq(current_invp).removeClass("out").css({"right" : "100%", "left" : "", "margin-top" : img_size4});
		
		$("#works a img").eq(current_last).animate({
			right: '-=38%',
			width: '+='+img_size2,
			height: '+='+img_size2,
			'margin-right': '-='+img_size2,
			'margin-top': '-='+img_size4},
			550);
		$("#works a img").eq(current).animate({
			left: '+=38%',
			width: '-='+img_size2,
			height: '-='+img_size2,
			'margin-left': '+='+img_size2,
			'margin-top': '+='+img_size4},
			550);
		$("#works a img").eq(current_next).animate({
			left: '+=10%'},
			200);
		$("#works a img").eq(current_invp).delay(200).animate({
			right: '-=10%'},
			200);
			
		window.setTimeout(denyClick, 550);
		
		current--;
		if (current<0) {
			current = count;
		};
		
		changeTitle(current);
		
		current_next--;
		if (current_next<0) {
			current_next = count;
		};
		
		current_inv--;
		if (current_inv<0) {
			current_inv = count;
		};
		current_last--;
		if (current_last<0) {
			current_last = count;
		};
		current_invp--;
		if (current_invp<0) {
			current_invp = count;
		};
	}

	function mOverLeft(){
		$("#works a img").eq(current_last).animate({
			right: '-=2%'},
			100);
	}
	function mLeaveLeft(){
		$("#works a img").eq(current_last).animate({
			right: '+=2%'},
			100);
	}
	function mOverRight(){
		$("#works a img").eq(current_next).animate({
			left: '-=2%'},
			100);
	}
	function mLeaveRight(){
		$("#works a img").eq(current_next).animate({
			left: '+=2%'},
			100);
	}
	
	$("#prev").click(function() {
		if (can_click) {
			prevClick();
			
		};
    });
    
    $("#prev").hover(mOverLeft, mLeaveLeft);
    $("#next").hover(mOverRight, mLeaveRight);
    
    $("#next").click(function() {
		if (can_click) {
			nextClick();	
		};
    });
});