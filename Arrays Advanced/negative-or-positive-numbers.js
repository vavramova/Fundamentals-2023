function negativeOrPositive(arr){
    let modifiedArr = [];

    arr.map(Number);

    for(let num of arr){
        if(num >= 0){
            modifiedArr.push(num);
        } else {
            modifiedArr.unshift(num);
        }
    }

    console.log(modifiedArr.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);