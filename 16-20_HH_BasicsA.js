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