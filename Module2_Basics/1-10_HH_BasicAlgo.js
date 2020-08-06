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

// #7
// Objectives
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.:sigma(3)=6(or1 + 2 + 3); sigma(5)=15(or1 + 2 + 3 + 4 + 5).

function sigma(num){
    var sum = (num*(num+1))/2

    return sum
}

// #8
// Objectives
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3)=6(or1 * 2 * 3);factorial(5)=120(or1 * 2 * 3 * 4 * 5).

function factorial(num) {
    var factorial = num 

    for(var i=1; i<num; i++){
    factorial *= (num - i)
    }
    
    return factorial 
}

// #9
// Objectives
// Given array, swap first and last, second and second-to-last, third and third-to- last, etc. Have the function return this swapped array. For example swapTwoardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].

function swapTowardCenter(arr){
    for (let i = 0; i < arr.length/2; i++) {
        var temporaryVarForSwitchingIndex = arr[i]
        arr[i] = arr[arr.length - 1-i] 
        arr[arr.length - 1-i] = temporaryVarForSwitchingIndex 
        
    }
    return arr 
}

// #10
// Objectives
// Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum.

// For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. On that example, it skips 3, 6, 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.

function threesFives(num){
    var addednum = 0;

    for (var i= 1; i < num; i++){
        if(i % 3 !== 0 && i % 5 !==0 ){
            addednum += i;
            }
            console.log(addednum)
        }
        return addednum
}


