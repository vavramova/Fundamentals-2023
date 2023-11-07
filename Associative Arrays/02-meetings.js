function meetings(arr){
    let schedule = {};

    for(let el of arr){
        let [day, person] = el.split(' ');

        
        if(schedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        } 
        schedule[day] = person;
        console.log(`Scheduled for ${day}`);
    }

    let entries = Object.entries(schedule);

    for(let [day, person] of entries){
        console.log(`${day} -> ${person}`);
    }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);