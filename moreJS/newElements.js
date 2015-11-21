$(document).ready(initializer());

function initializer(){
	$('#pBtn').click(function(){
		alert("hello");
		$(".starter-template").append("<button>hello world</button>");
	});

}