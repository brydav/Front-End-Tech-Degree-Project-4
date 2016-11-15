function testScript() {
	userInput = document.getElementById('searchField').value;
	userInput = userInput.toLowerCase();
	alert(userInput);
}
/*
var userInput;

function userInputScript() {
	var keyPress = event.keyCode;
	if(keyPress === 13) {
		userInput = document.getElementById('searchField').value;
		userInput = userInput.toLowerCase();
		alert(userInput);
	}
}*/
/*
document.getElementById('searchField').onsubmit = function () {
	if (characterCode === 13) {
		console.log("hello");
	}
	//userInput = document.getElementById('searchField');
}
*/