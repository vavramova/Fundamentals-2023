function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;

    let numAsString = String(num)

    for(let elements of numAsString){
        let digit = Number(elements);

        if(digit % 2 == 0){
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);