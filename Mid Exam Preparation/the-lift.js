function theLift(arr){
    let people = arr.shift();
    let wagons = arr.shift().split(' ').map(Number);

    for(let i = 0; i < wagons.length; i++){
        let aviableSpace = 4 - wagons[i];
        if(aviableSpace > 0){
            let passengers = Math.min(aviableSpace, people);
            wagons[i] += passengers;
            people -= passengers;
        }
    }

    if(people === 0 && wagons[wagons.length-1] < 4){
        console.log("The lift has empty spots!");
        console.log(wagons.join(' '));
    } else if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    }else{
        console.log(wagons.join(' '));
    }
}

theLift([
    "15",
    "0 0 0 0 0"
   ]
   )