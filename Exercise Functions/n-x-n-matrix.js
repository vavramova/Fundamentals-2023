function nXnMatrix(num){
    for(let rowNum = 1; rowNum <= num; rowNum++){
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }
}
nXnMatrix(3)