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