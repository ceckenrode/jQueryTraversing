$(document).ready(initializer());

function initializer(){
	$('#pBtn').click(function(){
		$("#elementContainer #pCol").append("<br><button>hello</button>");
	});

	$('#divBtn').click(function(){
		$("#elementContainer #divCol").append("<div>This is the new div</div>");
	});

}