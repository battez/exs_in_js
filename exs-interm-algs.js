
/*
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
				//console.log('i then last',i, last);
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
	
	console.log(search);
	console.log(rest);
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



