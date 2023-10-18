function computerStore(arr){
    let command = arr.shift();
    let sum = 0;

    while(command !== "special" && command !== "regular"){
        let price = Number(command);

        if(price <= 0){
            console.log("Invalid price!");
            command = arr.shift();
            continue;
        }

        sum += price;

        command = arr.shift();
    }

    let taxes = sum * 0.2;
    let priceWithTaxes = sum + taxes;

    if(command == 'special'){
        priceWithTaxes *= 0.90;
    }

    if(priceWithTaxes <= 0){
        console.log("Invalid order!" );
    } else{
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    );