function numbers(arr){
    let numbers = arr.shift().split(' ').map(Number);
    
    let command = arr.shift();

    while(command !== "Finish"){
        let tokens = command.split(' ');
        let action = tokens[0];
        let value = Number(tokens[1]);
        let replace = Number(tokens[2]);

        if(action == "Add"){
            numbers.push(value);
        } else if(action == "Remove"){
            if(numbers.includes(value)){
               numbers.splice(numbers.indexOf(value), 1);
               }
            else{
                command = arr.shift();
                continue;
            }
        }else if(action == "Replace"){
            if(numbers.includes(value)){
                let index = numbers.indexOf(value)
                numbers[index] = replace;
                    
            }else{
                command = arr.shift();
                continue;
            }
        }else if(action == "Collapse"){
            numbers = numbers.filter((num) => num >= value);
        }

        command = arr.shift();
    }
    console.log(numbers.join(' '));
}

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])