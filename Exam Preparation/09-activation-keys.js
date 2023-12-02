function activationKeys(arr){
    let key = arr.shift();
    let command = arr.shift();

    while(command !== "Generate"){
        let tokens = command.split('>>>');
        let action = tokens.shift();

        switch(action){
            case "Slice":
                let startIndex = tokens.shift();
                let endIndex = tokens.shift();

                let toRemove = key.slice(startIndex, endIndex);
                key = key.replace(toRemove,'');

                console.log(key);
                break;
            case "Flip":
            let letterCase = tokens.shift();
            let startIdx = tokens.shift();
            let endIdx = tokens.shift();

            if(letterCase == "Upper"){
                let toChange = key.slice(startIdx,endIdx);
                let toUpper = toChange.toUpperCase();
                key = key.replace(toChange,toUpper);
            }else{
                let toChange = key.slice(startIdx,endIdx);
                let toLower = toChange.toLowerCase();
                key = key.replace(toChange,toLower);
            }
            console.log(key);
                break;
            case "Contains":
                let subStr = tokens.shift();

                if(key.includes(subStr)){
                    console.log(`${key} contains ${subStr}`);
                }else{
                    console.log("Substring not found!");
                }
                break;
        }
        command = arr.shift();
    }

    console.log(`Your activation key is: ${key}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);