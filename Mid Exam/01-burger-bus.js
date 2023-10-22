function burgerBus(arr) {
    let numberOfCities = Number(arr.shift());
    let allProfit = 0;

    for (let i = 1; i <= numberOfCities; i++) {
        let name = arr.shift();
        let income = Number(arr.shift());
        let expences = Number(arr.shift());

        if (income >= 0 && income <= 10000 && expences >= 0 && expences <= 10000) {
            let specialEvents = 0
            if (i !== 15) {
                if (i % 3 == 0) {
                    specialEvents = expences * 0.50;
                }

                if (i % 5 == 0) {
                    let raintDays = income * 0.10;
                    expences += raintDays;
                }

                let profitForEachCity = income - expences - specialEvents;
                console.log(`In ${name} Burger Bus earned ${profitForEachCity.toFixed(2)} leva.`);
                allProfit += profitForEachCity;
            } else {
                let raintDays = income * 0.10;
                expences += raintDays;
                let profitForEachCity = income - expences;
                console.log(`In ${name} Burger Bus earned ${profitForEachCity.toFixed(2)} leva.`);
                allProfit += profitForEachCity;
            }
        }

    }

    console.log(`Burger Bus total profit: ${allProfit.toFixed(2)} leva.`);
}

burgerBus(["15",
    "az",
    "0",
    "100",
    "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100", "az",
    "0",
    "100",
]

)