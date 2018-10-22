/*
JavaScript Algorithms and Data Structures Projects
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures
/javascript-algorithms-and-data-structures-projects/

*/

/*
Return true if the given
string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same
way both forward and backward, ignoring punctuation,
case, and spacing.

Note
You'll need to remove all non-alphanumeric characters
(punctuation, spaces and symbols) and turn everything
into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar",
"RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2",
"2A3 3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
  
  // pre-process
  str = str.toLowerCase();
  
  // find unwanted characters and replace
  const re = /[^a-z\d]+/g;
	str = str.replace(re, '');
	
  // for reversing a string
  function reverseString(txt) {
    return txt.split('').reverse().join('');
	}

	// A question of symmetry:
  // find length & middle, split and reverse one piece
  // then check for equality
  
	// even if odd length string, this will give us enough to
	// check two halves are palindromic
	const half = Math.floor(str.length / 2);
	
	const flipped = reverseString(str.substring(str.length - half));
	
	return str.substring(0, half) === flipped;
  
}

palindrome("A man, a plan, a canal. Panama");


/*
See problems here:
 https://learn.freecodecamp.org
 /javascript-algorithms-and-data-structures
 /intermediate-algorithm-scripting


DNA pair all chars in a string
The DNA strand is missing the pairing element. Take each character,
get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the
provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are
 grouped into one encapsulating array.
*/
function pairElement(str) {
	let parts = Array.from(str);

	// mapping of pairs to other half
	const getOtherHalf = function(character) {
		let pair = [];

		switch (character) {
		  case 'T':
		    pair.push(character, 'A');
		    break;

		  case 'A':
		  	pair.push(character, 'T');
		  	break;

		  case 'G':
		  	pair.push(character, 'C');
		    break;

		  default:
		  	// possibly bit bad practice to set an option here as default!
		  	pair.push(character, 'G');
		}
		return pair;
	}

	let pairs = parts.map(halfpair => getOtherHalf(halfpair));
  return pairs;
}

pairElement("GCG");


function fearNotLetter(str) {

	let last = 0;
	for (var i = 0; i < str.length; i++) {
		
		if(i !== 0){
			if(str.charCodeAt(i) - last === 1)
			{
				last = str.charCodeAt(i);
				continue;
			}
			else {
				return String.fromCharCode(last + 1);
			}
		} else	{

			last = str.charCodeAt(i);
			continue;
		}

	}

  return undefined;
}

fearNotLetter("abce");

/*
Write a function that takes two or more arrays and returns a new array of
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in
 their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final
 array should not be sorted in numerical order.

 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
 uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
 should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
function uniteUnique(arr) {

	// use a set as handily keeps insertion order, and unique elems only
	let result = new Set();
	for (let prop in arguments) {
		
		arguments[prop].forEach( function(element, index) {
			result.add(element);
			//console.log(result);
		});
	  
	}
  return Array.from(result);
}

/*
TODO:


Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 in a string to their corresponding HTML entities.
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt;
 Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in
&​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
*/
function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");




/*

Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first six
 numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
less than or equal to 10 are 1, 1, 3, and 5.

*/
function sumFibs(num) {

	let fibs = [1, 1];

	//generate the Fibonacci number up until parameter given.
	for (let i = 2; true; i++) {

		const x = fibs[i - 1] + fibs[i - 2];
		if(x > num) {
			break;
		} else {
			fibs.push(x);
		}
		
	}

	const reducer = (total, value) => total + value;
	return fibs.filter(fib => (fib % 2) === 1).reduce(reducer);
  
}


/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only
two divisors, one and itself. For example, 2 is a prime number because it's
only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {

	let primes = [2, 3];

	for (let i = 2; i <= num; i++) {

		// keep track of whether prime.
		// At end use to decide to push() or not
		let prime = true;
		
		if((i % 2 !== 0) && (i % 3 !== 0)) {

			// use another loop to assess divisors
			for (let j = 5; j < i; j+=2) {
				if(i % j === 0 ) {
					prime = false;
					//console.log('i not prime', i);
					break;
				}

			}
		}
		else {
			prime = false;
		}

		if(prime) {
			primes.push(i);
		}
	}
	
	const reducer = (total, value) => total + value;
  return primes.reduce(reducer);
}

sumPrimes(10);





/**
 *

 Find the smallest common multiple of the provided parameters that can be
  evenly divided by both, as well as by all sequential numbers in the range
  between these parameters.

The range will be an array of two numbers that will not necessarily be in
 numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and
 3 that is also evenly divisible by all numbers between 1 and 3.
 The answer here would be 6
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

NB A bit slow - but works!
  */
function smallestCommons(arr) {

	// use only one order to simplify things
	arr = (arr[0] < arr[1]) ?  arr : arr.reverse();

	let found = false;
	let curr = arr[1];

	while (found === false) {

		// key to efficiency is increase by largest factor each pass
		curr += arr[1];
		

		// flag to switch off if a remainder from division attempt
		let divisible = true;
		for (let i = arr[1]; i >= arr[0]; i--) {
			
			if(curr % i !== 0) {

				divisible = false;

				// we need to return to while loop to try a bigger num
				break;
			}
		}

		// if we are still divisible here we made it through inner loop,
		// this will be our lowest multiple.
		if(!divisible) {
			continue;
		}
		else {
			found = curr;
			break;
		}
	}

  return found;
		
}


smallestCommons([1,5]);




/*
Given the array arr, iterate through and
remove each element starting from the first element
(the 0 index) until the function func returns true
when the iterated element is passed through it.

Then return the rest of the array once the condition
is satisfied, otherwise, arr should be returned as
an empty array.
*/
function dropElements(arr, func) {

  for(var i=0; i < arr.length; i++){

    if (func(arr[i])) {
      break;
    }
  }

  return arr.slice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; });


// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let result = [];
  
  for(var i = 0; i < arr.length; i++) {
  	
  	// Use recursion if we find inner is an array.
    if(! Array.isArray(arr[i])){
    	console.log('Returning', arr[i]);
    	
      // add to this particular result stack
      result.push(arr[i]);
    }
    else {
    	// go another level deeper...
      result = result.concat(steamrollArray(arr[i]));
    
    }
    
  }
	
  return result;

}


// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
	let result = '';
	
	let arr = str.split(' ');
	
	result = arr.map(letter =>
	String.fromCharCode(parseInt(letter, 2))).join('');
	
	return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 " +
"00100000 01100010 01101111 01101110 01100110 01101001 01110010"
+ " 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
Check if the predicate (second argument)
is truthy on all elements of a collection (first argument).

In other words, you are given an array
collection of objects. The predicate pre will be
an object property and you need to return true if its
value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that
translate to true when evaluated in a Boolean context.

*/
function truthCheck(collection, pre) {
  for (let i=0; i < collection.length; i++) {
  	
      let obj = collection[i];

      if(obj[pre]) {
        continue;
      }
      else {
        return false;
      }
  }
  // all fine
  return true;
}

/*
Create a function that sums two arguments together.
If only one argument is provided, then return a function
that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and
addTogether(2) should return a function.

Calling this returned function with a single argument
will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
function addTogether(x, z=0){
	
	if(typeof(x) !== "number" || typeof(z) !== "number") {
		return undefined;
	}
	
	if(z !== 0) {
		// we have both args present:
		return x + z;
		
	}
	else {
		// return fn to sum arguments (currying practise)
  	return (y) => {
  		
  		// still need to validate here in case of partial arguments
  		// TODO: Refactor as this smells redundant!
    	if(typeof(y) !== "number") {
		    return undefined;
	    }
	    
	    else {
	    	return x + y;
	    }
      
  	};
	}

}

addTogether(2,3);

/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName()
setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument
and it has to be a string.

These methods must be the only available means of interacting
with the object.

*/
let Person = function(firstAndLast) {
	
	let fullName;
	
  // Complete the method below and implement the others similarly
  this.setFullName = function(firstAndLast) {
    return fullName = firstAndLast.split(' ');
  };
  this.setLastName = function(last) {
    return fullName[1] = last;
  };
  this.setFirstName = function(first) {
    return fullName[0] = first;
  };
  this.getFullName = function() {
    return fullName.join(' ');
  };
  this.getLastName = function() {
    return fullName[1];
  };
  this.getFirstName = function() {
    return fullName[0];
  };
  
  this.setFullName(firstAndLast);
  
};

var bob = new Person('Bob Ross');
bob.getFullName();


/*

Return a new array that transforms the elements' average altitude
into their orbital periods (in seconds).

The array will contain objects in the format
{name: 'name', avgAlt: avgAlt}.


The values should be rounded to the nearest whole number.
The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers,
and the GM value of earth is 398600.4418 km3s-2. */
function orbitalPeriod(arr) {
  
  // sqrt (orbital radius^3 / GM) * 2PI (in seconds)
  // orbital radius is simply semi-major axis. altitude + earths radius
  function calcPeriod(obj) {
  	const GM = 398600.4418;
  	const earthRadius = 6367.4447;
  	const altitude = obj.avgAlt;
  	delete obj.avgAlt;
  	
  	// semi-major axis
  	let a = altitude + earthRadius;
  	
  	// formula for an orbital period
  	obj.orbitalPeriod = Math.sqrt(Math.pow(a, 3) / GM) * 2 * Math.PI;
  	
  	//console.log(Math.round(obj.orbitalPeriod));
  	obj.orbitalPeriod = Math.round(obj.orbitalPeriod);
  	
  	return obj;
  }
  
  return arr.map(obj => calcPeriod(obj));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// ==================

// sum start and end numbers and all between them.
// i.e. sumAll([10, 5]) should return 45.


// TODO: try with recursive
function sumAll(arr) {
	let total = 0;
	
	// establish the direction and set vars accordingly
	let first = arr[0];
	let last = arr[arr.length - 1];
	
	if (first === last) {
		// simple edge case
		return first + last;
	}
	else if (first > last) {
		// we need to flip direction
		first = last;
		last = arr[0];
	}
	else {
		
	}
	
	// accumulate total
  for (let i = first; i <= last; i++) {
  	total += i;
  }
  
  return total;

	
}

sumAll([1, 4]);


// only items in one array or the other get returned as result
function diffArray(arr1, arr2) {
  
  let newArr = [];

  newArr = arr1.filter(x => ! new Set(arr2).has(x));

  const additional = arr2.filter(x => ! new Set(arr1).has(x));
  
  // combine these items
  newArr.push(...additional);
  
  return newArr;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// using the first arg as array, remove all the later arguments from it.
function destroyer(arr) {
  
	const rest = Array.from(arguments);
	const search = rest.shift(0);
	
  	arr = search.filter(x => ! rest.includes(x));
  	return arr;
}

// test case returns [1,1]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/* 	Make a function that looks through an array of objects (first argument)
	and returns an array of all objects that have matching name and 	value pairs
(second argument).  	 	Each name and value pair of the source object has to be
present in 	the object from the collection --  	if it is to be included in the
returned array.


whatIsInAName([{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }],

{ last: "Capulet" });

*/
function whatIsInAName(collection, source) {
	
	// results to return:
  let arr = [];
  
 	for (let i = 0; i < collection.length; i++) {
 		  
 		  // a check to see if any source props aren't in curr obj, i
 		  let found = true;
 		  
 		  // go through the source properties
  		for (let prop in source) {
  			
  			// is prop in collection[i] and having same value?
  			if (collection[i].hasOwnProperty(prop)
  			&& source[prop] === collection[i][prop]) {
					
					continue;
					
				}
				else {
					
					// otherwise break out of this loop
					found = false;
					break;
					
				}
				
			}
			
			if(found) {
				arr.push(collection[i]);
			}
 		
  }
    	
  return arr;
}


/*

Convert a string to spinal case. Spinal case is
all-lowercase-words-joined-by-dashes. spinalCase("This Is Spinal Tap") should
return "this-is-spinal-tap". spinalCase("thisIsSpinalTap") should return
"this-is-spinal-tap". spinalCase("The_Andy_Griffith_Show") should return
"the-andy-griffith-show".

*/

function spinalCase(str) {
	
	// Deal with possible camelCaps needing separated first:
	let re = /([a-z][A-Z])/g;
	
	// define a replacer
	const replacer = function (match) {
		return match.substr(0, 1) + ' ' + match.substr(1);
	}
	
	// execute the replacement
	str = str.replace(re, replacer);

	// now do the rest of character swapping to hyphens
  str = str.toLowerCase();
  
  // find characters to swap
  re = /[\s\.\-_,]+/;
  
  const pieces = str.split(re);
  return pieces.join('-');
  
}

spinalCase('This Is Spinal Tap');

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".


If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/
function translatePigLatin(str) {

	const vowels = /[aeiou]/;
	// edge case where no vowels present
	if (null === str.match(vowels)) {
		console.log('no vowels');
		return str + 'ay';

	}
	else {
		// main swapping for rest of cases:
		const pattern = /^([^aeiou]+)(.+)/;
		let result = str.replace(pattern, '$2$1')

		if (result.substr(0,1) !== str.substr(0,1)) {
			console.log('not vowel start');
			result += 'ay';
		}
		else {
			console.log('vowel start');
			result += 'way';
		}
		
	  	return result;
	}
}

translatePigLatin("consonant");


/*

Perform a search and replace on the sentence using the arguments provided
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are
replacing it. For example if you mean to replace the word "Book" with the word
 "dog", it should be replaced as "Dog"

*/
function myReplace(str, before, after) {

	// add this to ensure multiple matches
	const pattern = new RegExp(before, 'gi');

	// handle the Note case given:
	const isLowerCase = function(txt) {
		return txt == txt.toLowerCase() && txt != txt.toUpperCase();
	}
	
	// define a replacer callback
	const replacer = function (match) {
		if (isLowerCase(match.substr(0,1))) {
			return after;
		}
		else {
			return after.substr(0,1).toUpperCase() + after.substr(1);
		}
	}

  	str = str.replace(pattern, replacer);

  	return str;

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



