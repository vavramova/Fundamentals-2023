function solve(arr){
    let condensed = [];
    //let flag  = true
    /*
    if(arr.length <= 1){
        console.log(`${arr[0]} is already condensed to number`)
        flag = false
    }
    */
    while(arr.length > 1){
        for(let i = 0; i < arr.length - 1; i++){
            condensed[i] = arr[i] + arr[i + 1];
        }
        arr = condensed;
        condensed = [];
        
    }
    
    console.log(arr.join());

}
solve([2,10,3])
solve([1])