function race(arr){
    let results = {};
    let names = arr.shift().split(', ');
    names.forEach(name => results[name] = 0);

    let letterPattern = /[a-z]/gi;
    let numberPattern = /\d/g;

    
    let command = arr.shift();
    
    while(command !== 'end of race'){
        let name = '';
        let distance = 0;

        let matchName = command.match(letterPattern);
        let matchDigit = command.match(numberPattern);

        if(matchName){
            for(let ch of matchName){
                name += ch;
            }
        }

        if(matchDigit){
            distance = matchDigit.map(Number).reduce((acc, val) => acc + val);
        }
        
        if(name in results){
            results[name] += distance;
        }

        command = arr.shift();
    }

    let entries = Object.entries(results);
    entries.sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race']);