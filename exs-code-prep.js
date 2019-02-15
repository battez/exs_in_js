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
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
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
console.log('=20',maxSequence([-2, 1, 0,-4, 20]));

console.log('=6',maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('=238',maxSequence([2,-18,19,-20,25,-22,-7,-25,-39,31,-38,-6,10,-15,31,-10,48,3,-45,-19,-23,4,32,27,-29,4,36,44,9,46,-27,-42,-42,-22,15,43,-26,21,37,27,9,-42,9,-36,-4,-18,27,-33,-18,-21,45,34,4,37,7,2,26,22,-47,-15,49,-20,37,27,-13,-29,24,-18,-14]));
console.log('=50',maxSequence([50,-16,-15,-24,-5,22]));
console.log('=202',maxSequence( [31,30,-5,-38,48,46,38,-35,49,22,-8,22,-27,-17,12,34,-31]));
console.log('=300',maxSequence( [-9,47,1,15,-21,32,-25,36,49,-11,15,25,13,15,5,34,-22,38,-22,40,36,-19,6,-5,-21,-45,-10,-19,36,22,-1,-37,1,-25,-35,-31,49]));
