function orders(product, quantity){
    let finalPrice = solve(product, quantity);
    console.log(finalPrice.toFixed(2));

    function solve(product, quantity){
        let price = 0;
        switch(product){
            case "coffee" : 
                return price = quantity * 1.50;
            case "water":
                return price = quantity * 1.00;
            case "coke":
                return price = quantity * 1.40;
            case "snacks":
                return price = quantity * 2.00;
        }
    }
}

orders("water", 5);
orders("coffee", 2);