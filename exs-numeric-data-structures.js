/*Write a function called sumIntervals/sum_intervals()
that accepts an array of intervals, and returns the sum of all the interval lengths.

Overlapping intervals should only be counted once.*/

function sumIntervals(intervals){

    // get min and max and fill an array with false for this length
    
    // set this array to true for values from the intervals
    
    // filter for true then return the length of the result
    
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