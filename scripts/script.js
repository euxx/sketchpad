
var gridNum = 16;

$(document).ready(function() {
	$("body").append("<div class='container'></div>");
	for(var i = 1; i <= gridNum; i++) {
		$(".container").append("<div class='row'></div>");
	}


	for (var j = 1; j <= gridNum; j++) {
		$(".row").append("<div class='grid'>hello</div>");
	}

	$(".grid").mouseenter(function() {
		$(this).addClass("hover-color");
	});

	$(".grid").mouseleave(function() {
		$(this).removeClass("hover-color");
	});

});
//console.log("hi");
