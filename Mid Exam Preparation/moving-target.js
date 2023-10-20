function movingTarget(arr){
    let targets = arr.shift().split(' ').map(Number);

    let command = arr.shift().split(' ');
    
    while(command[0] != "End"){
        let action = command[0];
        let index = Number(command[1]);
        let manipulation = Number(command[2]);
        if(action == "Shoot"){
            if(index >= 0 && index < targets.length){
             targets[index] -= manipulation;
             if(targets[index] <= 0){
                targets.splice(index, 1);
             }
            }
        } else if(action == "Strike"){
            if(index >= 0 && index < targets.length && index- manipulation >= 0 && index- manipulation < targets.length && index+ manipulation >= 0 && index + manipulation < targets.length){
                targets.splice(Math.max(0, index - manipulation), manipulation* 2 + 1)
            }else{
                console.log("Strike missed!");
                command = arr.shift().split(' ');
                continue;
            }
        } else if(action == "Add"){
            if(index >= 0 && index < targets.length){
            targets.splice(index, 0, manipulation);
            }else {
                console.log("Invalid placement!");
            }
        }
    
        command = arr.shift().split(' ');
    }

    console.log(targets.join('|'));
}


movingTarget(["1 2 3 4 5",
"Add 0 3",
"End"])
