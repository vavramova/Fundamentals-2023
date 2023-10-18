function sorting(arr){
    let sorted = arr.sort((a, b) => a - b);
    let final =[];

    while(sorted.length > 0){
        let biggest = sorted.pop();
        final.push(biggest);
        let smallest = sorted.shift();
        final.push(smallest);
    }
    console.log(final.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);