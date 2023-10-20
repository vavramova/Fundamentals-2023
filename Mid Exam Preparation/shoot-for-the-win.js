function shootForTheWin(arr){
    let targets = arr.shift().split(' ').map(Number);
    let shots = 0;
    let command = arr.shift();

    while(command != "End"){
        let index = Number(command);
        if(index >= 0 && index < targets.length){
            let check = targets[index];
            targets[index] = -1;
            shots++;
            for(let i = 0; i < targets.length; i++){
                if(targets[i] > check && targets[i] != -1){
                    targets[i] -= check;
                }else if(targets[i] <= check && targets[i] != -1){
                    targets[i] += check;
                }
            }
        } else{
            command = arr.shift()
          continue;
        }
        command = arr.shift;
    }
    console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`);
}

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

