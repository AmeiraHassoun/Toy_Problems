// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function averageAge(people) { 
<<<<<<< HEAD
 	sum =0
       for (var i = 0 ; i < people.length; i++) {
       	sum = sum + people[i].age
       }
       return sum/people.length
 }

 averageAge(people); // 43+36+44+24 = 36.74ß
=======
       // YOUR CODE HERE 
 }

 averageAge(people); // 43+36+44+24 = 36.74
>>>>>>> 527cc09c05ce6b99d3ff750199ad72f2585e7160
