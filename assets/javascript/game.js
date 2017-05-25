

	var guessedArr = [];
	var guesses = 10;
	var wins = 0;
	var losses = 0;

	function makeid(){
    
    	var possible = "abcdefghijklmnopqrstuvwxyz";
    
    	var text = possible.charAt(Math.floor(Math.random() * possible.length));

	    console.log(text);
	    return text;
	}

	var randomLetter = makeid();
	console.log(randomLetter);

	function reset(){
		guessedArr = [];
		guesses = 10;
		randomLetter = makeid();
		document.querySelector("#lettersTried").innerHTML = guessedArr;
		document.querySelector("#guessesLeft").innerHTML = guesses;
	}

	document.onkeyup = function(event){
		guesses--;
		var userGuess = event.key;
		guessedArr.push(userGuess);
		document.querySelector("#lettersTried").innerHTML = guessedArr.toString();
		document.querySelector("#guessesLeft").innerHTML = guesses;
		console.log(guessedArr);
		if(userGuess == randomLetter){
			alert("You win");
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			reset();
		}	
		
		if(guesses == 0){
			
			alert("You lose you suck");
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			
			reset();

		}

	}
