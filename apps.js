
//general variable declarations
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $leftArrow = $();
var $rightArrow =$();

//add image to overlay
$overlay.append($image);
//add overlay to body
$("body").append($overlay);

//capture click event on images
$("#portfolio a").click(function(event){
	event.preventDefault();
	var imagelocation = $(this).attr("href");
	//add href location to image
	$image.attr("src", imagelocation);
	$overlay.show();

});

$overlay.click(function(){
	$overlay.hide();

});