$(document).ready(function() {
	var state = "none";

	$("button#yelp").click(function() {
		if (state != "yelp") {
			state = "yelp";

			$(".overlay").animate({"opacity": "0"}, 250);
			$(".splash").delay(250).animate({"height": "50px"}, 500);
			$(".overlay-action").delay(750).animate({"opacity": "1"}, 250);

			$(".button-action").show(0);
			$(".button-action").delay(1000).animate({"opacity": "1"}, 250);
			$("button#wifi, button#menu, button#about").animate({"opacity": "0.25"}, 250);
		}
		else {
			state = "none";

			$(".button-action").animate({"opacity": "0"}, 250);
			$(".button-action").delay(250).hide(0);

			$(".overlay-action").animate({"opacity": "0"}, 250);
			$(".splash").delay(250).animate({"height": "300px"}, 500);
			$(".overlay").delay(750).animate({"opacity": "1"}, 250);
			
			
			$("button").animate({"opacity": "1"}, 250);
		}
		
	});
})