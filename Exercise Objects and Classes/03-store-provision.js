function storeProvision(currentStock, orderedProducts){
    let products = {};
    for(let i = 0; i < currentStock.length; i += 2){
        let product = currentStock[i];
        let qty = Number(currentStock[i + 1]);

        products[product] = qty;
    }

    for(let j = 0; j < orderedProducts.length; j+=2){
        let product = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);
        
        if(product in products){
            products[product] += qty;
        }else {
            products[product] = qty;
        }
    }

    let entries = Object.entries(products);

    for(let [stock, qty] of entries){
        console.log(`${stock} -> ${qty}`);
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])