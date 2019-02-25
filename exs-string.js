/*
exs-string.js
*/

/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:
*/

function domainName(url){

    // TODO: possibly add check / convert to lowercase?
    
    // split on protocol part
    let pieces = url.split('://');
    
    // remove left if it had one
    if(pieces.length > 1) {
        pieces.shift();
    }
    
    // if substring 0,4 is www. remove
    if(pieces[0].substring(0,4) === 'www.' ) {

        pieces[0] = pieces[0].substring(4);
    }
    
    // now should have the domain in the first section before a dot
    pieces = pieces[0].split('.');
    return pieces[0];
    
}

//tests
/*domainName("http://github.com/carbonfive/raygun");// == "github"
domainName("http://www.zombie-bites.com"); // == "zombie-bites"
domainName("https://www.cnet.com"); //== "cnet"*/

/*Given the string representations of two integers, return the string
representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides
the ten numerals "0" to "9".*/

// FIXME: this will work for trivial approach, but a more involved solution needed for passing codewars tests!
function sumStrings(a,b) {
    
    // any empty strings:
    if(a.trim().length === 0) {
        a = 0;
    }
    
    if(b.trim().length === 0) {
        b = 0;
    }
    
    
    return (BigInt(a) + BigInt(b)).toString(10);
    
}
console.log(sumStrings('123','456'));// 579
console.log(sumStrings("123123123123123123123123123123123123123123123","456456456456456456456456456456456456456456456"));
// 579579579579579579579579579579579579579579579

/*
Write a function dirReduc which will take an array of strings and returns an array of strings
with the needless directions removed (W<->E or S<->N side by side).

*/

// solution for a minimal path:
function dirReducMinimal(arr){
 
    let result = arr.reduce(function(accumulator, currentValue) {
    
        switch (currentValue) {
          case 'NORTH':
              accumulator[0] += 1;
              break;
          case 'SOUTH':
              accumulator[0] -= 1;
              break;
          case 'EAST':
              accumulator[1] += 1;
              break;
          default:
              accumulator[1] -= 1;
        }
    
        return accumulator;
        
    }, [0, 0]);


    if(result[0] > 0) {
        result[0] = Array(result[0]).fill('NORTH');
    } else {
        result[0] = Array(-1 * result[0]).fill('SOUTH');
    }
    
    if(result[1] > 0) {
        result[1] = Array(result[1]).fill('EAST');
    } else {
        result[1] = Array(-1 * result[1]).fill('WEST');
    }
    
    result = result[0].concat(result[1]);
    
    console.log(result);
    
    return result;
}

// actual solution (in progress)
function dirReduc(arr){
 
    const complements = {
        'NORTH' : 'SOUTH',
        'SOUTH' : 'NORTH',
        'EAST'  : 'WEST',
        'WEST'  : 'EAST'
    }
    
    let result = arr.reduce(function(accumulator, currentValue) {
        
        let previous = accumulator.slice(-1)[0];
        
        if(previous && (complements[currentValue] === previous)) {
            accumulator.pop();
        } else {
            accumulator.push(currentValue);
        }

        return accumulator;
        
    }, []);
    
    
    return result;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]);// => []
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);// ["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); //["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); // []