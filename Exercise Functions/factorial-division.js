function factorialDivision(num1, num2){
    let division = factorial(num1) / factorial(num2);
    console.log(division.toFixed(2));

    function factorial(num){
        let factorial = 1;

        for(let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);