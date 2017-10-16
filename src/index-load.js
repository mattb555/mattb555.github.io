function menuClick(contentclass, menuclass) {
	$(document).on("click", menuclass, (function(e) {
		$(document).on("click", ".DropContent", (function(e){
			e.stopPropagation();
		}));
		e.stopPropagation();
		$( ".DropContent" ).not(contentclass).hide();
		$( contentclass ).show();
	}));
}

function setUp() {
	$('#menuholder').load('navbar.html');
	menuClick("#ProjectContent", "#Projects");
	menuClick("#MainContent", "#Main");
	menuClick("#AssortedContent", "#Assorted");
	$(document).click(function(){
		$(".DropContent").hide();
	});
	$(document).on("click", "#Header", function() {
		window.location.href = "http://www.matthewbunge.com";
	});
	$("body").css("background-color", "white");
	$("body").show();
}

window.onload = setUp;