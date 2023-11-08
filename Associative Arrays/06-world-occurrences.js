function worldOccurrences(arr){
    let map = new Map();

    for(let el of arr){
        if(!(map.has(el))){
            map.set(el, 1)
        }else{
            let value = map.get(el)
            value++
            map.set(el, value)
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for(let el of sorted){
        console.log(`${el[0]} -> ${el[1]} times`);
    }

}
worldOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])