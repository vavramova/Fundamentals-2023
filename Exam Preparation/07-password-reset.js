function passwordReset(arr){
    let password = arr.shift();

    let command = arr.shift();
    while(command != "Done"){
        let tokens = command.split(' ');
        let action = tokens.shift();

        switch(action){
            case "TakeOdd":
            password = password.split('').filter((val, idx) => idx %2 !== 0).join('')
           
            console.log(password);
                break;
            case "Cut":
                let [idx, length] = tokens;
                idx = Number(idx);
                length = Number(length);
          
                let toCut = password.substring(idx,idx+length);
                password = password.replace(toCut, '');

                console.log(password);
                break;
             case "Substitute":
                let [subStr, subtitude] = tokens;

                if(password.includes(subStr)){
                  while(password.includes(subStr)){
                    password = password.replace(subStr, subtitude);
                }
                console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
        command = arr.shift()
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
