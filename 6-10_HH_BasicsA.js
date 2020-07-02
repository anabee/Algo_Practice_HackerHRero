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