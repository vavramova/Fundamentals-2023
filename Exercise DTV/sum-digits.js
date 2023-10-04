function solve(num){
    let sum = 0;
    let numAsString = String(num);
    
    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}

solve(245678)