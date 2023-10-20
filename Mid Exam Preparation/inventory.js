function inventory(arr){
    let items = arr.shift().split(', ');

    let command = arr.shift().split(' - ');

    while(command[0] != "Craft!"){
        let action = command[0];
        let item = command[1];
        
        if(action == "Collect"){
            if(!items.includes(item)){
                items.push(item);
            }else{
                command = arr.shift().split(' - ');
                continue;
            }
        }else if(action == "Drop"){
            if(items.includes(item)){
                items.splice(items.indexOf(item), 1);
            }else{
                command = arr.shift().split(' - ');
                continue;
            }
        }else if(action == "Combine Items"){
            let combine = item.split(':');
            let oldItem = combine[0];
            let newItem = combine[1];
            if(items.includes(oldItem)){
                items.splice((items.indexOf(oldItem))+1, 0, newItem);
            }else{
                command = arr.shift().split(' - ');
                continue;
            }
        }else if(action == "Renew"){
            if(items.includes(item)){
            let moveItem = items.splice(items.indexOf(item), 1);
            items.push(moveItem);
            }else{
                command = arr.shift().split(' - ');
                continue;  
            }
        }

        command = arr.shift().split(' - ');
    }
    console.log(items.join(', '));
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  
  )