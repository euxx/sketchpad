

$(document).ready(function() {

	$("body").append("<button>Enjoy It ^</button>");

	$("body").append("<div class='container'></div>");

	$("button").click(function() {
		$(".container").empty();
		gridNum = prompt("How many grids do you want? ^");
		addGrid(gridNum);
	});

	addGrid(gridNum);

});

	var gridNum = 16;

	var addGrid = function(num) {

		for(var i = 1; i <= num; i++) {
			$(".container").append("<div class='row'></div>");
		}

		for (var j = 1; j <= num; j++) {
			$(".row").append("<div class='grid'></div>");
		}

		$(".grid").mouseenter(function() {
			$(this).addClass("hover-color");
			$(".hover-color, .current").css("background", ranColor());
		});

		$(".grid").mouseleave(function() {
			$(this).removeClass("hover-color");
		});

	};

	var ranHex = function() {
		var ranNum = Math.floor(Math.random()*16);
		switch(ranNum) {
			case 10:
			ranNum = "a";
			return ranNum;;

			case 11:
			ranNum = "b";
			return ranNum;;

			case 12:
			ranNum = "c";
			return ranNum;;

			case 13:
			ranNum = "d";
			return ranNum;;
			case 14:
			ranNum = "e";
			return ranNum;;
			case 15:
			ranNum = "f";
			return ranNum;;
			default:
			return ranNum;;
		}
	};

	var ranColor = function() {
		console.log("#" + ranHex() + ranHex() + ranHex());
		return "#" + ranHex() + ranHex() + ranHex();
	};
