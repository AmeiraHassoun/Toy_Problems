 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	var last=0
 	
 	for (var i = 0; i < num ; i++){
 		if (i % 10 === 0){
 			last = i
 		}
 	}

 	if (last + 5 <= num){
 		return last + 10
 	}
 	 return last
}






