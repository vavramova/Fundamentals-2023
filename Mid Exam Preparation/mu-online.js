function mUOnline(rooms){
    let health = 100;
    let bitcoins = 0;

    let room = rooms.split('|');
    let bestRoom = 0;

    for(let el of room){
        bestRoom++;
        let tokens = el.split(' ');
        let command = tokens[0];
        let number = Number(tokens[1]);

        if(command == "potion"){    
            let currentHealth = health + number;
            if(currentHealth <= 100){
                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else{
                let healedFor = 100 - health;
                health = 100;
                console.log(`You healed for ${healedFor} hp.`);
                console.log(`Current health: ${health} hp.`);
            }

            
        } else if(command == "chest"){
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= number;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }
    if(health > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

mUOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")