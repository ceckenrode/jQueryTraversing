$(document).ready(initializer());

function initializer(){
	$('#pBtn').click(function(){
		$(".starter-template").append("<button>hello world</button>");
	});

	$('#divBtn').click(function(){
		$(".starter-template").append("<div>This is the new div</div>");
	});

}