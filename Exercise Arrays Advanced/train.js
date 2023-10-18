function train(arr){
    let wagons = arr[0].split(' ').map(Number);
    let capacity = arr[1];

    for(let i = 2; i < arr.length; i++){
        let command = arr[i];
        let tokens = command.split(' ');
        
        if(tokens[0] == 'Add'){
            wagons.push(Number(tokens[1]));
        } else {
            let passengers = Number(tokens[0]);

            for(let  i = 0; i < wagons.length; i++){
                if(wagons[i] + passengers <= capacity){
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);