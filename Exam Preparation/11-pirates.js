function pirates(arr) {
    let input = arr.shift();
    let targets = {};

    while (input != "Sail") {
        let [city, population, gold] = input.split("||");
        population = Number(population);
        gold = Number(gold);

        if (!(city in targets)) {
            targets[city] = { population, gold };
        } else {
            targets[city].population += population;
            targets[city].gold += gold;
        }

        input = arr.shift();
    }

    let command = arr.shift();

    while (command != "End") {
        let tokens = command.split("=>");
        let action = tokens.shift();
        let city = tokens.shift();

        if (action == "Plunder") {

            let people = Number(tokens.shift());
            let gold = Number(tokens.shift());

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            targets[city].population -= people;
            targets[city].gold -= gold;

            if (targets[city].population <= 0 || targets[city].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete targets[city];
            }
        } else if (action == "Prosper") {
            let gold = Number(tokens.shift());

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
                command = arr.shift();
                continue;
            } else {
                targets[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(targets);
    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, info]) => console.log(`${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`));

    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}


pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

