function shoppingList(str){
    let list = str.shift().split('!');
    
    let command = str.shift().split(' ');

    while(command[0] != "Go"){
        let action = command[0];
        let product = command[1];
        let newProduct = command[2];

        if(action == "Urgent"){
            if(!list.includes(product)){
                list.unshift(product);
            }else{
                command = str.shift().split(' ');
                continue;
            }
        }else if(action == "Unnecessary"){
            if(list.includes(product)){
                list.splice(list.indexOf(product), 1)
            }else{
                command = str.shift().split(' ');
                continue;
            }
        } else if(action == "Correct"){
            if(list.includes(product)){
                let index = list.indexOf(product)
                list.splice(index, 1)
                list.splice(index, 0, newProduct);
            }else{
                command = str.shift().split(' ');
                continue;
            }      
        } else if(action == "Rearrange"){
            if(list.includes(product)){
               let toRemove = list.splice(list.indexOf(product), 1);
               list.push(toRemove);
            }else{
                command = str.shift().split(' ');
                continue;
            }
        }


        command = str.shift().split(' ');
    }
    console.log(list.join(', '));
   
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
