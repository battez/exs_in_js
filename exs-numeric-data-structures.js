/*Write a function called sumIntervals/sum_intervals()
that accepts an array of intervals, and returns the sum of all the interval lengths.

Overlapping intervals should only be counted once.*/

function sumIntervals(intervals){

    // get max. and fill an array with 0 for this length
    // concat the elements of intervals first of all into a flat array:
    let arr = [].concat.apply([], intervals); // interestingly can do this with push() instead of concat().

    // try with just maximum for length:
    let result = Array(Math.max(...arr)).fill(0);
    
    // set this array to 1 for values from the intervals
    for (let interval of intervals) {
        for (let j = interval[0]; j < interval[1]; j++) {
            result[j] = 1;
        }
    }
    
    // return the reduce sum of the result
    return result.reduce((a, b) => a + b);
}
// tests
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19