function counterStrike(arr){
    let energy = Number(arr.shift());

    let command = arr.shift();
    let wonBattles = 0;

    while(command != 'End of battle'){
        let distance = Number(command);
        if(energy >= distance){
            wonBattles++;
            energy -= distance;
        } else{
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }

        if(wonBattles % 3 == 0){
            energy += wonBattles;
        }

        command = arr.shift();
    }
    if(command == 'End of battle'){
    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    }
    
}

counterStrike((["100",
"End of battle"])

)