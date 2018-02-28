	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var newInput=""
		for (var i = 0 ; i < input.length ; i++) {
			if (input[i] === input[i].toUpperCase()){
				newInput = newInput + input[i].toLowerCase()
			}
			else {
				newInput = newInput + input[i].toUpperCase()
			}

		}
		console.log(newInput)
		return newInput
	}