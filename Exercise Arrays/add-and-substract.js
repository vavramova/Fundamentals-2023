function solve(arr){
    let originalSum = 0;
    let newSum = 0;
 
    for(let i = 0; i < arr.length; i++){
        let number = arr[i];
        originalSum += number;

        if(number % 2 == 0){
            number += i;
        } else {
            number -= i;
        }

        newSum += number;
        arr[i] = number;
    }
    
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}

solve([5, 15, 23, 56, 35]);