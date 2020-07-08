// #6 
// Objectives
// Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers

function firstPlusLength(){
    var sum = arr[0]+ arr.length
    console.log(sum)
}

firstPlusLength();

// #7 
// Objectives
// Create a function that prints/logs all the even numbers from 4 to 22.

// Have it also return the sum of all the numbers that were printed.

function printEven4to22(){
var num = 0 

for ( var i=4; i <23; i++){
    if (i % 2 == 0){
        console.log(i) 
        num = num + i  
        }
    }
return num
}; 

printEven4to22();

// #8
// Add odd integers from -25,000 to 30,000 and have the function return its final sum. Is there a short cut?

function addOddInts(){
    var sum = 0 

for (var i=-24999; i < 30000; i+=2){
    sum +=i; 
    }
return sum
}

addOddInts();

// #9
// Objectives
// Given an array, write a function that prints/logs each number in the array.

function printArr(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(rr[i]);
        
    }
}

printArr([1,2,3]);

// #10
