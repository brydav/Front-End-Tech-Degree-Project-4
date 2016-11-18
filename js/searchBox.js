var userInput;
var inputModified;

function searchBox() {
	userInput = document.getElementById('searchField').value;
	inputModified = userInput.toLowerCase();
}

function filter() {
	//compare inputModified to text in each image's alt text
	//if match is not found add class "non-matched"
	//hide() "non-matched" class

}
