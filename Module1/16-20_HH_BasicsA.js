// #16 
// Objectives
// Given an array with multiple values, write a function that returns the maximum number in the array. For example, findMax([-3,3,5,7]) should return 7.

function findMax(arr) {
    return Math.max(...arr)
}

// #17
// Objectives
// Given an array with multiple values, write a function that returns the minimum value in the array. For example findMin([0,3,-5]) should return -5.

function findMin(arr){
    return Math.min(...arr)
}

// #18
// Objectives
// Given an array with multiple values, write a function that returns a new array with two elements. The first value in the new array should be the minimum value in the original array. The second value in the new array should be the maximum value in the original array.

// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].

function findMinMax(){
    var newArr = [];

var minAmt = Math.min(...arr);

var maxAmt = Math.max(...arr);

newArr.push(minAmt);
newArr.push(maxAmt);

return newArr;
}

//#19
// Objectives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var posCount = 0;

    for (var i=0; i < arr.length; i++){
        if (arr[i]>0){
            posCount += 1 
            }
        }
    
    arr.splice(arr.length-1,1, posCount)
    
    return arr
}

// #20 
// Objectives
// Given an array, write a function that prints values that are greater than its 2nd value in the array. For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at least 2 values. Have the function also return the sum of the numbers that were printed/logged.   

function valGreaterThanSecond(arr){
    var sum = 0 

for (var i=0; i<arr.length; i++){
    if(arr[i] > arr[1]){
        console.log(arr[i])
        sum = sum + arr[i]
        }
    }
return sum
}