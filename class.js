function matchRandom(arr){

    for (let i = 0; i < arr.length; i++) {
        var stuff = arr

        var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
        console.log(random_value)
        if (arr[i] == random_value){
            return i 
        }
    }
}

console.log(matchRandom([10,34,56,67,93,120,137,168,259,280,311,342,413,514]))