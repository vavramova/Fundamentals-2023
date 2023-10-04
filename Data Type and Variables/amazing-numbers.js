function amazingNumbers(number){
    let numAsString = String(number);
    let sum = 0;
    for(i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);

    }
    let result = sum.toString().includes('9');
    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False`);
}

amazingNumbers(1233)