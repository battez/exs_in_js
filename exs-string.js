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

// my solution to the actual Kata
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
/*dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]);// => []
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);// ["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); //["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); // []*/


/*
Task: https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

Given two strings s1 and s2, we want to visualize how different the two strings are.
We will only take into account the lowercase letters (a to z).
First let us count the frequency of each lowercase letters in s1 and s2.

non-regex solution attempt:
*/
function mix(s1, s2) {
  
  if(arguments.length !== 2) {
      return '';
  }
   
  let counts = [new Map(), new Map()];
  
  // keep track of any letters used, this is handy to return result of just those > 1
  let lettersUsed = new Set();
  
  for (let i = 0; i < counts.length; i++) {

      // iterate from sentence i, finding frequency of letters
      for (let chr of arguments[i]) {

          // Only need 97 --> 122: i.e. lowercase letters a-z
          if ((chr.charCodeAt(0) >= 97) && (chr.charCodeAt(0) <= 122)) {

              counts[i].set(chr, 1 + counts[i].get(chr) || 1);
              
              // we only want to return any of 2 or more, so we keep a note of these
              if(counts[i].get(chr) === 2) {
                  lettersUsed.add(chr);
              }
          }

      }
      
  }
  
  //   console.log('letters used', lettersUsed);
  
  // initialise our result array to correct size
  let result = [];

  for (let letter of lettersUsed) {
      
      // - funnel answers into array of arrays, where index of
      let answer = '';
      const s1count = counts[0].get(letter) || 0;
      const s2count = counts[1].get(letter) || 0;
      
      // the outer array is the no. letters of that solution
      if (s1count === s2count) {
          answer = '=:' + letter.repeat(s1count);
          
      } else if (s1count > s2count) {
          answer = '1:' + letter.repeat(s1count);
      } else {
          answer = '2:' + letter.repeat(s2count);
      }
      //   console.log('answer',answer);
      
      // initialise to array if necessary:
      result[answer.length] = result[answer.length] || [];
      result[answer.length].push(answer);
      
   
  }
  
  // this is the final result we will return:
  let final = [];
  
  // then we sort inners ascendingly, lexically.
  // (...and in final return outer array descendingly)
  for (let i = 0; i < result.length; i++) {
    
    // we do not want the undefined elements
    if(result[i] !== undefined) {
        final.push(result[i].sort().join('/'));
    }
    
  }
  
  // finally return and join:
  if (!final.length) {
      return '';
  } else {
      //
      return final.reverse().join('/');
  }
  
}

//tests
mix("codewars", "codewars"); // ""
mix("Lords of the Fallen", "gamekult");// "1:ee/1:ll/1:oo")
mix("Are they here", "yes, they are here");// "2:eeeee/2:yy/=:hh/=:rr"
mix("looping is fun but dangerous", "less dangerous than coding");// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"



// The total number of permutation of a string formed by n characters (all distinct) is n!
/* Middle Permutation
Task
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac". The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

Input/Output
[input] string s

unique letters (2 <= length <= 26)

[output] a string

middle permutation.
*/
function middlePermutation(s) {
    
    let result;
    
    function findFactorial(n) {
        if (n === 1) {
            return n;
        } else {
            return n * findFactorial(n-1);
        }
        
    }
    
    let permutations = findFactorial(s.length);
    permutations = Math.ceil(permutations / 2);
    
    // Todo: figure out way to quickly get this permutation itself...
    // might just naively have to loop through
    result = permutations;
    return result;
}