// Below are various functions written for FreeCodeCamp exercises.
console.log('scratchpad running...');

function reverseString(str) {
	
	// loop thru string, build a new string from it
	let output = '';
	
	// ES6 syntax for a nice way to loop over iterable objects
	for (let value of str) {
		
		// prepend value to emerging string.
		output = value + output;
	}
	
  return output;
}

reverseString("hello");


function factorialize(num) {
	if(!Number.isInteger(num) || num < 1) {
		console.log('invalid...');
		return 1;
	}
  else if (num === 1) {
  	console.log('end state reached..');
  	return 1;
  }
  else {
  	return num * factorialize(num - 1);
  }
  
}

factorialize(5);

function findLongestWordLength(str) {
  const pieces = str.split(' ');
  
  // init. variable where we will store the longest length we find.
  let longest = 0;
  
  for(let piece of pieces) {
  	longest = (longest < piece.length) ? piece.length : longest;
  }
  
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// some more practice with Func Programming in JS
// See http://reactivex.io/learnrx/
function largestOfFour(arr) {
	
	// map every element with a function that
	// gets the max of that inner array
	return arr.map( function findMax(singleArray) {
		
		console.log('Element:');
		
		// this will run on a single array's elements
		return singleArray.reduce(function(a, b) {
			
			console.log('latest max:', Math.max(a, b));
    	return Math.max(a, b);
		});
		
	});
	

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/*
Check if a string (first argument, str) ends with the given
target string (second argument, target).*/
function confirmEnding(str, target) {
  const last = str.slice(-target.length);
  return last === target;// boolean
}

confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
	
	let result = "";
	
  // check valid input
  if(!Number.isInteger(num) || num < 1) {
    return result;
  }
  else {
  	for  (let i = 0; i < num; i++){
  		result += str;
  	}
  	return result;
  }
  
}

repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
	// indicate a string was truncated
	const more = "...";
	
	// check for valid input
  if(!Number.isInteger(num) || num < 1) {
    return more;
  }
  else {
  	// truncate string if applicable
    const result = str.slice(0, num);
    
    // if truncated add the more string to show this.
  	return (result.length < str.length)? result + more : result ;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
  let num = [];
  num = arr.filter(func);
  
  return num[0]; // ok to return undefined for this Question!
}

findElement([1, 2, 3, 4], num => num % 2 === 0);



function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof(bool) === "boolean";
}

booWho(null);



function titleCase(str) {
	
	let words = str.toLowerCase().split(" ");
	
	const result = words.map(
		word => word.charAt(0).toUpperCase() + word.slice(1)
	);
	
  return result.join(" ");
}

titleCase("I'm a little tea pot");