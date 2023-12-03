function messagesManager(arr){
    let capacity = Number(arr.shift());
    let stats = {};

    let command = arr.shift();

    while(command !== "Statistics"){
        let tokens = command.split('=');
        let action = tokens.shift();
        let username = tokens.shift();

        
        if(action == "Add"){
            stats[username] = {sent: 0, recieved: 0};
            if(username in stats){
                let sentMsg = Number(tokens.shift());
                let recievedMsg = Number(tokens.shift());
                stats[username].sent += sentMsg;
                stats[username].recieved += recievedMsg;
            }
        }else if(action == "Message"){
            let reciever = tokens.shift();

            if(username in stats && reciever in stats){
                stats[username].sent += 1;
                stats[reciever].recieved +=1;  
            
            
            let usernameSum = Number(stats[username].sent) + Number(stats[username].recieved);
            let recieverSum = Number(stats[reciever].sent) + Number(stats[reciever].recieved);
                if(usernameSum >= capacity){
                    console.log(`${username} reached the capacity!`);
                    delete stats[username];
                }
                if(recieverSum>= capacity){
                    console.log(`${reciever} reached the capacity!`);
                    delete stats[reciever];
                }
            }  
        }
        else{
            if(username == "All"){
                let keys = Object.keys(stats)
                for(let key of keys){
                    delete stats[key];
                }
            }else{
                if(username in stats){
                delete stats[username];
                }
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(stats);
    console.log(`Users count: ${entries.length}`);
    for(let [username, info] of entries){
        let sum = Number(info.sent) + Number(info.recieved);
        console.log(`${username} - ${sum}`);
    }
}


messagesManager(["20",

"Add=Mark=3=9",

"Add=Berry=5=5",

"Add=Clark=4=0",

"Empty=Berry",

"Add=Blake=9=3",

"Add=Michael=3=9",

"Add=Amy=9=9",

"Message=Blake=Amy",

"Message=Michael=Amy",

"Statistics"])