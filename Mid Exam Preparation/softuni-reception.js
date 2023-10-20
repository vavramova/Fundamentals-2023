function softuniReception(arr){
    let students = Number(arr.pop());
    
    let hoursPerBreak = 4;
    let studentsperHour = 0;

    for(let workers of arr){
        studentsperHour += Number(workers);
    }
    
    let hours = 0;

    while(students > 0){
        hours++;
        if(hours % hoursPerBreak === 0){
            continue;
        }
        students -= studentsperHour;
        if(students < 0){
            break;
        }
    }
    
    console.log(`Time needed: ${hours}h.`);

}

softuniReception(['3','2','5','40']);