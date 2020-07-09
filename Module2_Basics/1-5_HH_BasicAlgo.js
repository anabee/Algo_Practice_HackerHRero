// #1
// Objectives
// Create a function sum() that returns the sum of the two numbers passed as its arguments. For example, sum(2,5) should return 7; sum(3,10) should return 13.

function sum(num1, num2){
    return num1*num2
}

// #2
// Objectives
// Log positive numbers starting at 2019, counting down by 8.

function CountDownBy8(){
    for (var i=2019; i>0; i-=8){
        console.log(i)
    }
}

// #3
// Objectives
// Kelvin wants to convert between temperature scales. Create celciusToFahrenheit(cDegrees) that accepts a number of degrees in Celcius, and returns the equivalent temperature as expressed in Fahrenheit degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function celciusToFahrenheit(cDegrees) {
    var Faren = ((9/5)*cDegrees) + 32 

    return Faren
}

// #4
// Objectives
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr){
    for (i=0; i <arr.length; i ++){
        if (arr[i]>0){
            arr[i] = "big"
        }  
        }
    return arr 
}

// #5 
// Objectives
// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6].

function double(arr){
    for (i=0; i<arr.length; i++){
        arr[i] = arr[i]*2
        }
    return arr
}

// #6
// Objectives
// Given an array and a value Y, count and return the number of array values greater than Y. For example, returnArrayCountGreaterThanY( [2,3,5], 4) should return 1 as there is only one element in the array whose value is greater than 4.

function returnArrayCountGreaterThanY(arr, y){
    var count = 0;
    for (var i=0; i<arr.length; i++){
    if (arr[i]>y){
      count ++;
        }
    }
return count;
}