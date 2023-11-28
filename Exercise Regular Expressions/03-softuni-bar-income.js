function softuniBarIncome(arr){
    let totalMoney = 0;
    let command  = arr.shift();
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/

    while(command !== 'end of shift'){
        let match = command.match(pattern);

        if(match){
            let { customer, product, count, price} = match.groups;
            let totalPrice = Number(count) * Number(price);
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            totalMoney += totalPrice;
        }

        command  = arr.shift();
    }

    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);