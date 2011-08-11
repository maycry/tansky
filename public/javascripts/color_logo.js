$(document).ready(function() {
	var content = $('#logo').html();
	
	
	function colorText(){
	    $('#logo a').gradientText({
        	colors: ['#00CCFF', '#FF0000', '#00CC00']
    	});
    	var api = $('#logo a').data('gradientText');
		api.update();
	}
	
	function decolorText(){
	    $('#logo').html(content);
	}
	
	$('#logo a').hover(colorText, decolorText);
});
