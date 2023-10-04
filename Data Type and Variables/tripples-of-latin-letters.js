function solve(n){
    let num = Number(n);
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            for(let k = 0; k < num; k++){
                let letter1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let letter2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let letter3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
solve(`3`)