function phoneShop(arr){
    let phones = arr.shift().split(', ');
    
    let command = arr.shift();

    while(command !== "End"){
        let tokens = command.split(' - ');
        let action = tokens[0];
        let phone = tokens[1];
        

        if(action == "Add"){
            if(!phones.includes(phone)){
                phones.push(phone);
            }
        }else if(action == "Remove"){
            if(phones.includes(phone)){
                phones.splice(phones.indexOf(phone), 1);
            }
        }else if(action == "Bonus phone"){
            let tokens2 = phone.split(':')
            let OldPhone = tokens2[0];
            let newPhone = tokens2[1]
            if(phones.includes(OldPhone)){
                phones.splice((phones.indexOf(OldPhone))+1, 0, newPhone);
            }
        }else if(action == "Last"){
            if(phones.includes(phone)){
                let toAdd = phones.splice(phones.indexOf(phone), 1);
                phones.push(toAdd);
            }
        }
        command = arr.shift();

    }
    console.log(phones.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",

"Last - SamsungA50",

"Add - MotorolaG5",

"End"])