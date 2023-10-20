function blackFlag(arr){
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let goal = Number(arr.shift());
    let totalPlunder = 0;

    for(let i = 1; i<=days; i++){
        totalPlunder += dailyPlunder;

        if(i % 3 == 0){
            let additionalPlunder = 1/2 * dailyPlunder;
            totalPlunder += additionalPlunder;
        }

        if(i % 5 == 0){
            let lose = totalPlunder * 0.30;
            totalPlunder = totalPlunder - lose;
        }

    }
    
    if(totalPlunder >= goal){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
        
    }else{
        let percentage = totalPlunder / goal * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag((["10",
"20",
"380"])

)