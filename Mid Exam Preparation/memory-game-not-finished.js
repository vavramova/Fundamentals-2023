function memoryGame(arr){
    let sequence = arr.shift().split(' ');
    let command = arr.shift().split(' ');
    let moves = 0;

    
    while(command != 'end'){
        moves++;
        let idx1 = Number(command[0]);
        let idx2 = Number(command[1]);
        if(idx1 == idx2 || idx1 < 0 || idx1 > sequence.length || idx2 < 0 || idx2 > sequence.length){
            let add = (`-${moves}a`);
            sequence.splice((sequence.length)/2, 0, add);
            sequence.splice(Math.floor((sequence.length)/2), 0, add);
            console.log(`Invalid input! Adding additional elements to the board`);
            command = arr.shift().split(' ');
            continue;
        }
        
        if(sequence[idx1] === sequence[idx2]){
            let found = sequence.splice(idx2, 1);
            sequence.splice(idx1-1, 1);
            console.log(`Congrats! You have found matching elements - ${found}!`);
        }  else if(sequence[idx1] !== sequence[idx2]){
            console.log(`Try again!`);
        }

        
        
        command = arr.shift().split(' ');
    }
    
    
    if(sequence.lengh == 0){
        console.log(`You have won in ${moves} turns!`);
    }else {
    console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
    }



memoryGame(  [
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
]    
     );