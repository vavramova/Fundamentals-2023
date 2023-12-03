function stringGame(arr){
    let string = arr.shift();
    let command = arr.shift();

    while(command != "Done"){
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action == 'Change'){
            let char = tokens.shift();
            let replacement = tokens.shift();

            string = string.split(char).join(replacement);

            console.log(string);
        }else if(action == 'Includes'){
            let substring = tokens.shift();

            if(string.includes(substring)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(action == 'End'){
            let substring = tokens.shift();
            if(string.endsWith(substring)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(action == 'Uppercase'){
            string = string.toUpperCase();
            console.log(string);
        }else if(action == 'FindIndex'){
            let char = tokens.shift();

            if(string.includes(char)){
                console.log(string.indexOf(char));
            }
        }else{
            let startIdx = Number(tokens.shift());
            let length = Number(tokens.shift());
            let end = startIdx + length;

            string = string.slice(startIdx, end);

            console.log(string);
        }
        command = arr.shift();
    }
}

stringGame(["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"])