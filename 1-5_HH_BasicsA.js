// #1
// Objectives
// Create a function that prints/logs all the integers from 1 to 20.

function print1to20(){
    for (let i = 1; i < 21; i++) {
        console.log(i)
    }
};

print1to20();

// #2
// Objectives
// Create a function that prints/logs all the odd numbers from 3 to 20.

function printOdd3to20(){
    for (let i = 2; i < 20; i++) {
        if (i % 2 != 0)
        console.log(i)
    }
};

printOdd3to20();

// #3
// Objectives
// Create a function that prints/logs all the even numbers from 4 to 22.

function printEven4to22(){
    for (var i=4; i < 23; i++){
        if (i % 2 == 0){
            console.log(i)
            }
        }
};

printEven4to22();

// #4 
// Objectives
// Print/log all the multiples of 7 between the numbers 7 to 62.

function multiplesOf7(){
    for (var i=1; i <63; i++){
        if (i % 7 == 0){
            console.log(i)
            }
        }
};

multiplesOf7();

// #5 
// Objectives
// Log positive numbers starting at 50, counting down by fives (exclude 0).

function countdownByFives(){
    for (var i=50 ; i > 1; i--){
        if (i % 5 == 0){
            console.log(i)
            }
        }
};

countdownByFives();