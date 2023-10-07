function calculator(num1, num2, operator){
    let finalResult = solve(num1, num2, operator);
    console.log(finalResult);

    function solve(num1, num2, operator){
        switch(operator){
            case 'multiply': return num1 * num2;
            case 'divide': return num1 / num2;
            case 'add': return num1+ num2;
            case 'subtract': return num1 - num2;
        }
    }
}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');