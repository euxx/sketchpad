

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

	var addGrid = function(number) {

		for(var i = 1; i <= number; i++) {
			$(".container").append("<div class='row'></div>");
		}

		for (var j = 1; j <= number; j++) {
			$(".row").append("<div class='grid'></div>");
		}

		$(".grid").mouseenter(function() {
			$(this).addClass("hover-color");
			// $(".hover-color").css("background", deepHex());
			$(".hover-color").css("background", ranColor());
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
			break;

			case 11:
			ranNum = "b";
			break;

			case 12:
			ranNum = "c";
			break;

			case 13:
			ranNum = "d";
			break;
			case 14:
			ranNum = "e";
			break;
			case 15:
			ranNum = "f";
			break;
			default:
			break;
		}
		return ranNum;
	};

	var ranColor = function() {
		var h = ranHex;
		console.log("#" + h() + h() + h() + h() + h() + h());
		return "#" + h() + h() + h() + h() + h() + h();
	};



	var deepHex = function() {
		var hex = 10;

		for (var i = 1; i > 0; i--) {
			hex--;
		}
		switch(hex) {
			case 10:
			hex = "a";
			break;

			default:
			break;
		}
		console.log("#" + hex + hex + hex);
		return "#" + hex + hex + hex;
	};

	deepHex();

