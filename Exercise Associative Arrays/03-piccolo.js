function piccolo(arr){
    let map = new Map();

    for(let el of arr){
        let [command, plate] = el.split(', ');
        
        if(command == 'IN'){
            map.set(plate);
        }else{
            map.delete(plate);
        }
    }
    if(map.size = 0){
        console.log("Parking Lot is Empty");
    } else {
        let sorted = [];
        for(let key of map.keys()){
            sorted.push(key);
            sorted.sort((a,b) => a.localeCompare(b))
        }
        for(let car of sorted){
            console.log(car);
        }
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])