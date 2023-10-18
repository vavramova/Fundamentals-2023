function bombNumbers(nums, bombInfo){
    let [bombNum, power] = bombInfo;

    while(nums.includes(bombNum)){
        let idx = nums.indexOf(bombNum);
        nums.splice(Math.max(0, idx - power), power* 2 + 1, 0);

    }

    let sum = nums.reduce((acc, value) => acc + value);

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2,2, 9],[4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);