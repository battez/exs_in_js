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
  result = result.sort();
  // console.log('result', result);
  return result;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

