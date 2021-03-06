
//general variable declarations
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img class="overlay_img">');
var $caption = $('<p id="cap_text"></p>');
var $leftArrow = $('<span><a id="#" class="arrow_left arrow"><img src="svg/arrow_white_left.svg"></a></span>');
var $rightArrow = $('<span><a id="#" class="arrow_right arrow"><img src="svg/arrow_white_right.svg"></a></span>');
var $exit = $('<span><a id="#" class="exit_button"><img src="svg/exit_button_white.svg"></a></span>');
var thisImage;

//add image to overlay
$overlay.append($image);
//add cpation to image
$overlay.append($caption);
//add left/right navigation arrows
$overlay.append($leftArrow);
$overlay.append($rightArrow);
//add exit button
$overlay.append($exit);
//add overlay to body
$("body").append($overlay);


/////////capture click event on images/////////
$("#portfolio a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	var captionText = $(this).attr("data-caption");
	$caption.text(captionText);
	displayCurrentImage(this);
	$overlay.show();
});

function displayCurrentImage(anchorElement) {
	thisImage = anchorElement;
	var imageToShow = $(anchorElement).attr('href');
	$image.attr('src', imageToShow);
	var captionText = $(anchorElement).attr('data-caption');
	$caption.text(captionText);
}


/////////navigate lightbox/////////
var theParent;

function leftArrow() {
	if ($(thisImage).parent().is(':first-child')) {
		theParent = $('#portfolio :last-child');
	} else {
		theParent = $(thisImage).parent().prev();
	}
	var imagePrevious = theParent.children('a');
	displayCurrentImage(imagePrevious);
}
function rightArrow() {
	if ($(thisImage).parent().is(':last-child')) {
		theParent = $('#portfolio :first-child');
	} else {
		theParent = $(thisImage).parent().next();
	}
	var imageNext = theParent.children('a');
	displayCurrentImage(imageNext);
}

$leftArrow.click(function(){
	leftArrow();
});

$rightArrow.click(function() {
	rightArrow();
});

$(document).keydown(function(e) {
	switch(e.which) {
		case 37 : // left key
			leftArrow();
			break;
		case 39 : //right key
			rightArrow();
			break;
		default : return;	
	}
	e.preventDefault();
});

//////Touch Navigation - Not supported yet//////
/*
 $('#overlay').on("swipeleft", leftArrow);
  $('#overlay').on("swiperight", rightArrow);
*/  

/////////close lightbox/////////
$exit.click(function(){
	$overlay.hide();

});

