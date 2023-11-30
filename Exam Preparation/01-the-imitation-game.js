function theImitationGame(arr){
    let message = arr.shift();
    let command = arr.shift();

    while(command != "Decode"){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action == "Move"){
            let lettersCount = Number(tokens.shift());
            let firstLetters = message.slice(0, lettersCount);
            message = message.replace(firstLetters, '');
            message += firstLetters;

        }else if(action == "Insert"){
            let idx = Number(tokens.shift());
            let value = tokens.shift();

            message = message.slice(0, idx) + value + message.slice(idx)
        }else{
            let [substring, replacement] = tokens;

            while(message.includes(substring)){
               message = message.replace(substring, replacement);
            }
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);

 // theImitationGame([
 //   'owyouh',
 //   'Move|2',
 //   'Move|3',
 //   'Insert|3|are',
 //   'Insert|9|?',
 //  'Decode'
 // ]);