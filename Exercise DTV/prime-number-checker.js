function solve(num){
    let isPrime = true;
    
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(num === 1 && isPrime){
        console.log(isPrime);
    }else{
        console.log(isPrime);
    }
}
solve(1)