function solve(arr, rotations){
    for(let i = 1; i <= rotations; i++){
        let first = arr.shift();
        arr.push(first);
    }

    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)