//let list = {song: {author, key}}

function thePianist(arr){
    let numberOfPieces = Number(arr.shift());
    let list ={};

    for(let i = 0; i < numberOfPieces; i++){
        let tokens = arr.shift().split('|');
        let [piece, composer, key] = tokens;

        list[piece] = { composer, key };
    }
    
    let command = arr.shift();

    while(command != "Stop"){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action == "Add"){
            let [piece, composer, key] = tokens;

            if(piece in list){
                console.log(`${piece} is already in the collection!`);
            }else {
                list[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }else if(action == "Remove"){
            let piece = tokens[0];

            if(piece in list){
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else {
            let [piece, newKey] = tokens;

            if(piece in list){
                list[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(list);

    entries.forEach(([piece, info]) => console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`));
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);