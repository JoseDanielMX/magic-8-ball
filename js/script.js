$(document).ready(function() {
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
    $("#answer").hide();

	// Define the method
	magic8Ball.askQuestion = function(question) {

        // Add a fade in effect
		 $("#answer").fadeIn(4000);

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

		// Change the side of the image
		$("#8ball").attr("src", "./img/answer-side.png");

		 console.log(question);
		 console.log(answer);
    };
    
    // Prompt a popup window to write a question, hide previous answer and change the side of the image
    var onClick = function() {
 
		$("#answer").hide();
		$("#8ball").attr("src", "./img/number-side.png");
		 
		// Wait half a second before showing prompt
		   setTimeout(
			   function() {
				   // Show prompt
				   var question = prompt("Ask a YES or NO question");
				   $("#8ball").effect( "shake" );
				   magic8Ball.askQuestion(question);
			   }, 500);
     
    };
     
    $("#questionButton").click( onClick );
});