function solve(lost, helmet, sword, shield, armor){
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;


    for(let i = lost-2; i >= 0 ; i -= 2){      
        helmetCount++
    }

    for(let j = lost-3; j >= 0; j -=3){
        swordCount++
    }

    for(let k = lost-6; k >=0; k -=6){
        shieldCount++;
    }

    for(let n = lost-12; n>=0; n -=12){
        armorCount++;
    }


    let helmetPrice = helmet * helmetCount;
    let swordPrice = sword * swordCount;
    let shieldPrice = shield * shieldCount;
    let armorPrice = armor * armorCount;

    let total = helmetPrice+swordPrice+shieldPrice+armorPrice

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
solve(23,

    12.50,
    
    21.50,
    
    40,
    
    200)