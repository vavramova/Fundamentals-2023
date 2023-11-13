function partyTime(input) {
    let list = [];

    while (input[0] != 'PARTY') {
        list.push(input.shift());
    }
    input.shift();

    for (let name of input) {
        let index = list.indexOf(name);

        if(index != -1){
            list.splice(index, 1);

        }
    }

    let vip = [];
    let regular = [];
    for (let name of list) {
        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
            vip.push(name);
        } else {
            regular.push(name)
        }

    }

    console.log(list.length);
    if(vip.length > 0){
    console.log(vip.join('\n'));
    }
    if(regular.length > 0){
    console.log(regular.join('\n'));
    }
}


//partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])