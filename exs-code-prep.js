/* Interview code prep ex1
Symmetric difference
*/
function sym(args) {

	// remove each argumet's duplicate values to begin with
	// so it is just an array of unique values:
	let unique = a => [...new Set(a)];
	for (let arg = 0; arg < arguments.length; arg++) {
		args[arg] = unique(arguments[arg]);
	}
	
	// start with initial array and then compare each in turn with that.
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
  	
  	let current = args[i];
  	
  	for (let j = 0; j < current.length; j++) {
  		let value = current[j];
  		if (result.includes(value)) {
  			// remove value if already in
  			result = result.filter(x => x !== value);
  		}
  		else {
  			// add to result
  			result.push(value);
  		}
  	}
  }
  
  return result.sort();
  
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

/*

Algorithms: Inventory Update
Compare and update the inventory stored in a 2D array against a
second 2D array of a fresh delivery. Update the current existing inventory item
quantities (in arr1). If an item cannot be found, add the new item and quantity into
the inventory array. The returned inventory array should be in alphabetical
order by item.
*/
function updateInventory(arr1, arr2) {
    
    // convert existing inventory to a Map, swap the elemtn order before doing so
    let existing = new Map(arr1.map(x => x.reverse()));
    
    // iterate the update and adjust the existing inventory
    for (let i = 0; i < arr2.length; i++) {
        
        if(existing.has(arr2[i][1])) {
            //update the value
            existing.set(arr2[i][1], arr2[i][0] + existing.get(arr2[i][1]));
        }
        else {
            // add new item to existing inventory
            existing.set(arr2[i][1], arr2[i][0]);
        }
    }
    
    // need to reorder Map alphabetically for tests
    existing = new Map([...existing].sort());

    // convert Map back to array format
    let updated = Array.from(existing);
    
    // reverse the order of elements in each item
    updated.map(x => x.reverse());

    return updated;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

function permAlone(str) {
	let count = 0;
	
	// if all unique then n! permutations.
	// NB not sure there is a formula though for this :/
	// Recursion seems appropriate as we are wanting to
	// repeatedly go through and run a check, count, until nothing left.
	
  return str;
}

permAlone('aab');

/*
Algorithms: Pairwise
Given an array arr,
find element pairs whose sum equal the second argument arg
and return the sum of their indices.
*/
function pairwise(arr, arg) {
	
	// store indexes we use in here, so we can check against them
	let used = new Set();
	
	// go through the initial array and look for pairs in inner loop
	for (let i = 0; i < arr.length; i++) {
	
		if(used.has(i)) {
				continue;
		}
		
		for (let j = i + 1; j < arr.length; j++) {
			
			if(used.has(j)) {
				continue;
			}
			
			// check for a solution
			if (arr[i] + arr[j] === arg) {
				used.add(i).add(j);
				//console.log('used is now',used);
				
				// move on...
				break;
			}
			
		}
		
	}
	
	// sum used as the answer
	const result = Array.from(used);
	if (result.length) {
		return result.reduce((total, current) => total + current);
	} else {
  	return 0;
	}
	
}

pairwise([1,4,2,3,0,5], 7);


// sort an array of integers in ascending order
function bubbleSort(arr) {
	
	// record how many swaps we make on each pass. Stop condition will be 0.
	let changes;
	
	while (changes !== 0) {
		
			// reset to 0 each time
		  changes = 0;
		  
		  // store the swapping value
		  let temp;
		  
		  for (var j = 0; j < arr.length - 1; j++) {
				
				// make a swap if necessary
		  	if (arr[j] > arr[j+1]) {
		  		temp = arr[j];
		  		arr[j] = arr[j+1];
		  		arr[j+1] = temp;
		  		changes ++;
		  	}
		  	
		  }
  	
	}
	
  return arr;
}

// test array:
//bubbleSort([2,1,5,-3]);
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

/* trying Codewars exercises


Create a function that returns the sum of the two lowest positive numbers
given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

[10,9,2,8,6]
*/
function sumTwoSmallestNumbers(numbers)	{
	numbers.sort((a, b) =>  a - b);
	
	for (let i = 0; i < numbers.length; i++) {
		
		// in case there were negative integers in the sorted array
		// we only return the sum of two lowest pos. integers:
		if (numbers[i] > 0) {
			return numbers[i] + numbers[i+1];
		}
	}
}
// console.log(sumLowestTwoPos([10,-2,9,2,8,6,-3,-1]));

String.prototype.upperFirstLetters = function () {
	
	function upperFirst(word) {
		return word.substring(0,1).toUpperCase() + word.substring(1);
	}
	
	return this.split(' ').map((x) => upperFirst(x)).join(' ');
}

/*Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(arr){
	
	let heaps = new Map();
	
	for (let i = 0; i < arr.length; i++) {
		
		if(heaps.has(arr[i])) {
			
			// hopefully it is efficient to delete a key
			heaps.delete(arr[i]);
			
		} else {
			heaps.set(arr[i], true);
		}
		
	}
	
	return heaps.keys().next().value;
	
}

/*Implement a function that adds two numbers together and returns
their sum in binary. The conversion can be done before, or after
the addition.

The binary number returned should be a string.*/
function addBinary(a, b) {
	let result = a + b;
	return result.toString(2);

}
addBinary(3, 8);

/*
bus stops, left is on right is off in array of tuples.
*/
let number = function(busStops){
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	
  return busStops.map((x) => x[0] - x[1]).reduce(reducer);
  
}
console.log(number([[10,0],[3,5],[5,8]]));


/*

You are going to be given an array of integers.

Your job is to take that array and find an index N where
the sum of the integers to the left of N is equal to the
sum of the integers to the right of N.

If there is no index that would make this happen, return -1.
[1,0,1]

*/
function findEvenIndex(arr)
{
	// store totals for left and right parts of the array
  let left;
  let right;
 
  if(!arr.length) {
  	return 0;
  }
  else {
  	  for (let i = 0; i < arr.length; i++) {
  	  	
  	  	// the two sliced parts of the array
  	  	leftItems = arr.slice(0, i);
  			rightItems = arr.slice(i+1);
  			
  			left = leftItems.reduce((a, cV) => a + cV, 0);
  			right = rightItems.reduce((a, cV) => a + cV, 0);
  			
  			if (left === right) {
  				return i;
  			}
  		}
  		
  		// no index found? Then:
  		return -1;
  }

}


/*
The maximum sum subarray problem consists
in finding the maximum sum of a contiguous subsequence
in an array or list of integers:


Easy case is when the list is made up of only
positive numbers and the maximum sum is the sum of the whole
array. If the list is made up of only negative numbers,
return 0 instead.

Empty list is considered to have zero greatest sum.

Note that the empty list or array is also a valid sublist/subarray.
*/

let maxSequence = function(arr){
  let maxValue = 0;
  let currentTotal = 0;
  
  // nested loop should give us exhaustive way to get maximum:
  for (let i = 0; i < arr.length; i++) {
  	
  	for (let j = i + 1; j <= arr.length; j++) {
  		
  		currentTotal = arr.slice(i, j).reduce((a, b) => a + b);
  		// console.log(arr.slice(i, j));
  		// console.log('gives temp:', currentTotal);
  		
  		if (currentTotal > maxValue) {
  			maxValue = currentTotal;
  		}
  	}
  }
  return maxValue;
}
// TEST console.log('=20',maxSequence([-2, 1, 0,-4, 20]));

let uniqueInOrder = function(iterable){
  // iterable can be a string or an array
  let temp, uniques = [];
  
  for (const item of iterable) {
  	if (temp === item) {
  		continue;
  	}
  	else {
  		temp = item;
  		uniques.push(item);
  	}
	}
	return uniques;
}
/*TESTS console.log(uniqueInOrder('AAAABBBCCDAABBB'));// == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));//['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));//[1,2,3]*/

/*
There is a queue for the self-checkout tills at the supermarket.
Your task is write a function to calculate the total time required
for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers
representing the queue. Each integer represents a customer,
and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first
element in the array/list) proceeds to a till as soon as it
becomes free.
*/
function queueTime(customers, n) {
	
	if(!customers.length) {
		return 0;
	}
  // make an array of arrays to act as the checkout tills & a totals holder
  let tills = [];
  let tillTotals = [];
  
	for (let i = 0; i < n; i++ ) {
	    tills[i] = [];
	}
	
	
  // Work through the queue, to assign to tills.
  // Then find time = max summed till.
  for (let i = 0; i < customers.length; i++) {

  	const current = customers[i];
  	
  	// initially fill up empty tills
  	if(i < n) {
  		tills[i % n].push(current);
  		tillTotals[i % n] = current;
  	}
  	else {
  		// find smallest tillTotal, add this current queue item to that,
  		// then update the tillTotal
  		// fn: get the index of the min. value of an array
			const index = tillTotals.indexOf(Math.min(...tillTotals));
  
  		tills[index].push(current);
  		tillTotals[index] += current;
  	}
		
  }
  
  // return max amount of time that will be needed for all customers to be done:
  const time = Math.max(...tillTotals);
  
  return time;
  
}

/*
Write an algorithm that takes an array
and moves all of the zeros to the end,
preserving the order of the other elements.
*/
let moveZeros = function (arr) {
	let result = [];
	let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
  	if(arr[i] !== 0) {
  		result.push(arr[i]);
  	} else {
  		zeros++;
  	}
  }
  while (zeros) {
  	result.push(0);
  	zeros--;
  }
  return result;
}

// tests
// moveZeros([0,1,2,-1]); // [1,2,-1,0]
// moveZeros([false,1,0,1,2,0,1,3,"a"]); // [false,1,1,2,1,3,"a",0,0]

// smarter version using filter()
let moveZerosAlt = function (arr) {
	
  return arr.filter(elm => elm !== 0).
  					concat(arr.filter(elm => elm === 0));
}


/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the
input string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/
function duplicateCount(text){
	
	// although this uses two variables it is very clearly aligned with the logic
	// of the task:
  let once = new Set();
  let duplicates = new Set();
  for (char of text.toUpperCase()) {
  	if (!once.has(char)) {
  		once.add(char);
  	} else {
  		duplicates.add(char);
  	}
  }
  return duplicates.size;
}
console.log(duplicateCount("Indivisibilities"));

/*Same but squared:

Given two arrays a and b write a function comp(a, b)
that checks whether the two arrays have the "same" elements,
with the same multiplicities.
"Same" means, here, that the elements in b are the elements in a squared,
regardless of the order.*/

function compSimple() {
	// sort both
	
	// square first using map check equals b
	// stringify both to compare.
}

// alt. version
function comp(array1, array2){
	
	// simple check
	if (!Array.isArray(array1) || !Array.isArray(array2) || (array1.length !== array2.length))  {
		
		return false;

	}
	
	// loop through first array, square value
	// then find in array2 and unset or break if not found.
	for (var i = 0; i < array1.length; i++) {
		
		const x = array1[i] * array1[i];
		let found = false;
		
		for (var j = 0; j < array2.length; j++) {
			if (array2[j] === x) {
				array2.splice(j, 1);
				found = true;
				break;
			}
		}
		
		if (!found) {
			return false;
		}
	}
	
	// if we get this far it must be true:
	return true;

}

// tests
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]// same
console.log(comp(a, b));

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] // fail

	
// another version - filter multiple times from set of
// first array and length of filter results must equal length
function compFilter(a, b){
	
}

/*
Given two arrays of strings a1 and a2 return a sorted array r
in *lexicographical order* of the strings of a1 which are substrings
of strings of a2.

Note: after looking at others solutions, this could be much simpler using
array.some() and for the substring part, using string.indexOf()

Or convert to a string using join().

*/

// A solution without recourse to regex:
function inArray(array1, array2) {
  
  // this provides a filter we can use on the first array
  function isIn(str, words=[]) {
  	
  	let found = false;
  	
  	for (let i = 0; i < words.length; i++) {
  		
  		const word = words[i];
  		
  		for (let j = 0; j <= (word.length - str.length); j++) {
				if(str === word.substring(j, j+str.length))
				{
					found = true;
					break;
				}
			}
			
			if(found) {
				break;
			}
  	}
			
  		
  	return found;
  
  }
  
  return array1.filter(sub => isIn(sub, array2)).sort();
}

// tests
a1 = ["xyz", "live", "strong"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]; // live strong
console.log(inArray(a1, a2));


/*

Write a function cakes(), which takes the recipe (object) and the available
ingredients (also an object) and returns the maximum number of cakes Pete
can bake (integer). For simplicity there are no units for the amounts
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
Ingredients that are not present in the objects, can be considered as 0.
*/
function cakes(recipe, available) {
  
  let possibleAmounts = [];
  	
  // loop through keys recipe
  for (let key in recipe) {
  	if(recipe.hasOwnProperty(key)) {
  		if (key in available) {
			
				// divide available by recipe amount to find minimum rounded down
				possibleAmounts.push(Math.floor(available[key] / recipe[key]));
				
			}
			else {
				// if missing key in available ingredients return 0
				return 0;
			}
  	}
		
	}
  
  return Math.min(...possibleAmounts);
  
}

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1},
{flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
{sugar: 500, flour: 2000, milk: 2000});

/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers.
The final result has to be given as an array of arrays.

Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
*/
function factors(num)
{
 var
  n_factors = [],
  i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});  // numeric sort
 return n_factors;
}

function sumOfDivided(intArr=[12, 15]) {
  
  // find factors first
  function findFactors(num){
  	
  	let factors = [];
  	
  	for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
  		
  		// to check if is a factor:
  		if(num % i === 0) {
  			factors.push(i);
  			
  			// having found one factor, check for its complement
  			if(num / i !== i) {
  				factors.push(num / i);
  			}
  		}
  		
  		
  	}
  	
  	return factors;
  }
  
  let result = [];
  
  for (let i = 0; i < intArr.length; i++) {
  	
  	allFactors = findFactors(intArr[i]);
  	
  	// check which factors are primes
  	if(true) {
  		result.push([fac, intArr[i]]);
  	}
  	
  }
  
  
  
  
  return result;
  
  //return [[2, 12]];
}
 