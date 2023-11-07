function storage(arr){
    let map = new Map();

    for(let el of arr){
        let tokens = el.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);
        if(!map.has(product)){
            map.set(product, +qty)
        } else {
            let currQty = map.get(product);
            let newqty =currQty += qty;
            map.set(product, newqty);
        }
    }

    for(let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}

storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);