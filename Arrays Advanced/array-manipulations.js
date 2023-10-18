function arrayManipulations(commands){
    let arr = commands.shift().split(' ').map(Number);

    for(let i = 0; i < commands.length; i++){
        let [command, firstNum, secondNum] = commands[i].split(' ');

        let first = Number(firstNum);
        let second = Number(secondNum);

        switch(command){
            case 'Add' : arr.push(first);
                break;
            case 'Remove' : arr = arr.filter(el => el !== first);
                break;
            case 'RemoveAt' : arr.splice(first, 1);
                break;
            case 'Insert' : arr.splice(second, 0, first);
                break;
        }
        }
        console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3']);