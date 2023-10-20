function treasureHunt(arr){
    let chest = arr.shift().split('|');

    let command = arr.shift();

    while(command != "Yohoho!"){
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action == "Loot"){
            tokens.filter(item => !chest.includes(item)).forEach(item => chest.unshift(item));
            
        }else if(action == "Drop"){
            let index = Number(tokens.shift());
            if(index > 0 && index < chest.length){
            let toAdd = chest.splice(index, 1);
            chest.push(toAdd);
            }
        }else if(action == "Steal"){
            let count = tokens.shift();
            console.log(chest.splice(-count).join(', '));
        }
        command = arr.shift();

    }
    if(chest.length == 0){
        console.log(`Failed treasure hunt.`);
    }else{
    let sum = 0
    for(let el of chest){
        sum += el.length;
    }
    let avgTreasureGain = sum / chest.length

    console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
}
}

treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

)