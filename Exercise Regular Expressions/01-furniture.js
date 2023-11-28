function furniture(arr){
    let command = arr.shift();
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/

    let names = [];
    let totalPrice = 0;

    while(command !== "Purchase"){
        let match = command.match(pattern);

        if(match){
            let { name, price, qty } = match.groups;

            names.push(name);

            let furniturePrice = Number(price) * Number(qty);
            totalPrice += furniturePrice;
        }

        command = arr.shift();
    }

    console.log("Bought furniture:");
    if(names.length > 0){
    console.log(names.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);