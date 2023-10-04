function solve(arr){
    let topNums = [];

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let isTop = true;

        for(let j = i + 1; j < arr.length; j++){
            let check = arr[j];

            if(num <= check){
                isTop = false;
                break;
            } 
        }
        if(isTop){
            topNums.push(num);
        }
    }
    console.log(topNums.join(' '));
}

solve([1, 4, 3, 2])
solve([14, 24, 3, 19, 15, 17])