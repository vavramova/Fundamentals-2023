function secretChat(arr){
    let msg = arr.shift();
    let command = arr.shift();

    while(command != "Reveal"){
        let tokens = command.split(':|:');
        let action = tokens.shift();

        if(action == "InsertSpace"){
            let idx = Number(tokens.shift());
            msg = msg.slice(0, idx) + ' ' + msg.slice(idx);
            console.log(msg);
        }else if(action == "Reverse"){
            let substring = tokens.shift();

            
                let start = msg.indexOf(substring);
                if(start == -1) {
                   console.log("error");
                   command = arr.shift();
                   continue;
               }
                let left = msg.slice(0, start);
                let right = msg.slice(start+substring.length);
                msg = left + right + substring.split('').reverse().join('') 
            console.log(msg);
        }else {
            let substring = tokens.shift();
            let replacement = tokens.shift();

            let parts = msg.split(substring);
            msg = parts.join(replacement);
            console.log(msg);
            }
            command = arr.shift();
        }
        console.log(`You have a new text message: ${msg}`);
    }


secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
  