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

console.log(threesFives(10))