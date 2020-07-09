// #21
// Objectives
// Given two numbers passed to the function, return a new array of length num1 with each value num2. For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

function thisLengthThatValue(num1, num2){
    var arr = []

    for (var i=0; i < num1; i++){
        arr.splice(i,0,num2)
    }
    return arr 
}

// #22
// Objectives
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

function addSevenToMost(arr){
    var newArr = []

    for (var i=1; i<arr.length; i++){
        var timesSeven = arr[i]+7
        newArr.push(timesSeven)
    }
    return newArr 
}

// #23
// // Objectives
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. If the array that was passed to the function has less than two elements, have the function return false.

// For example greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.

function greaterThanSecond(arr){
    var newArr = []

    if (arr.length <= 1){
        return false
    }
    else {
        for (var i=0; i<arr.length; i++){
            if (arr[i] > arr[1]){
            newArr.push(arr[i])     
            }       
        }
    return newArr   
    }
}

// #24
// Objectives
// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2. For example swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].

function swapFirstLast(arr){
    var firstInd = arr[0]
    arr[0] = arr[arr.length -1]
    arr[arr.length -1] = firstInd

return arr
}