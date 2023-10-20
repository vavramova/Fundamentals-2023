function heartDelivery(arr){
    let neighborhood = arr.shift().split('@');
    
    let command = arr.shift().split(' ');
    let jump = 0;

    while(command[0] != "Love!"){
        let length = Number(command[1]);
        jump += length;

        if(jump >= neighborhood.length){
            jump = 0;
        }

        if(neighborhood[jump] !== 0){
            neighborhood[jump] -= 2;
            if(neighborhood[jump] == 0){
                console.log(`Place ${jump} has Valentine's day.`);
            }
        }else if(neighborhood[jump] == 0){
            console.log(`Place ${jump} already had Valentine's day.`);
        }

        command = arr.shift().split(' ');
    }
    console.log(`Cupid's last position was ${jump}.`);

    let ifSuccess = true;
    let failedPlaces = 0;

    for(let houses of neighborhood){
        if(houses > 0){
            ifSuccess = false;
            failedPlaces++;
        }
    }

    if(ifSuccess){
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
    
}

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
