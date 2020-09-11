$(document).ready(function() {
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

	// Define the method
	magic8Ball.askQuestion = function(question) {

		 // Create a random number
		 var randomNumber = Math.random();

		 // Make the random number between 0 and the number of items in your array
		 var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

		 // Round down the number to be a whole number
		 var randomIndex = Math.floor(randomNumberForListOfAnswers);

		 // Use that number to index a random number from the answers array
		 var answer = this.listOfAnswers[randomIndex];

         // Show the answer
         $("#answer").text(answer);

		 console.log(question);
		 console.log(answer);
    };
    
    // Prompt a popup window to write a question
    var onClick = function() {
 
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
     
    };
     
    $("#questionButton").click( onClick );
});