// #11
// Objectives
// Given an array, write a function that prints the index value of its positive values.

// For example printPositiveIndex([1, 3, -10]), have it print/log 0, 1 (as the 0th index had a positive value and index 1 also had a positive value). printPostiiveIndex([10, 5, -5, 15]) should print/log 0, 1, and 3. In other words, it prints the index of each positive number in the array.

function printPositiveIndex(arr){
    for ( var i=0; i< arr.length; i++){
        if(arr[i] > 0){
            console.log(arr.indexOf(arr[i]))
            }
        }
}

// #12
// Objectives
// Given an array, write a function that returns a new array where each negative value was converted to a positive value. For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array should remain as positive, so that each number in the new array is all positive.

function bePositive(arr){
var positiveArr = []

for ( var i=0; i< arr.length; i++){
    if(arr[i] < 0){
        var newInd = arr[i] * -1;
        
        positiveArr.push(newInd);
    } else {
        positiveArr.push(arr[i])    
    }
    }
    
return positiveArr
}

bePositive([-1,-3,-5, 7, -9]);

// #13
// Objectives
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. For example squareVal( [1, 3, 5] ) should return [1, 9, 25].

function squareVal(arr){
    var squaredArr = []

    for ( var i=0; i< arr.length; i++){
        var newIndx = arr[i] * arr[i];
    
        squaredArr.push(newIndx)
        }
        
    return squaredArr 
}