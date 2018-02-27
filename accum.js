// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){

    	var arr=[]
        //your code is here
        for (var i = 0 ; i < input.length; i++) {

        	for (var j = 0; j < i; j++) {
        		input[i]=input[i]+input[i]
     		   }
     		   arr.push(input[i])
     		   //console.log("x")
    }
    return arr.join("-")
}