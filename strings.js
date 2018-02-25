// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"

	function characPosit(character){
		var array=[0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		for (var i = 0 ; i < array.length ; i++) {
			if (character===array[i]){
			return "Position of alphabet: " + i 
			}
		}	
	}



// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var x = ""
		for (var i = 0; i < n ; i++) {
			x = x + s
		}
		return x
	}

	