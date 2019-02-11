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


function bubbleSort(arr) {
	
	// record how many swaps we make on each pass. Stop condition will be 0.
	let changes;
	
	while (changes !== 0) {
		
			// reset to 0 each time
		  changes = 0;
		  
		  // store the swapping value
		  let temp;
		  
		  for (var j = 0; j < arr.length; j++) {
				
		  	if (arr[j] > arr[j+1]) {
		  		temp = arr[j];
		  		arr[j] = arr[j+1];
		  		arr[j+1] = temp;
		  		changes ++;
		  		
		  		continue;
		  	}
		  	
		  }
  	
	}
	
	console.log(arr);
  return arr;
}

// test array:
//bubbleSort([2,1,5,-3]);
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
