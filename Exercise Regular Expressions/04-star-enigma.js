function starEnigma(arr) {
    let commandsCount = arr.shift();
    let starPattern = /[star]/gi;
    let decyptedArr = [];

    for (let i = 0; i < commandsCount; i++) {
        let commandToDecrypt = arr[i];

        let match = commandToDecrypt.match(starPattern);

        let decypted = '';
        if (match) {
            for (let ch of commandToDecrypt) {
                let value = ch.charCodeAt();
                let devide = value - match.length;

                let newChar = String.fromCharCode(devide);
                decypted += newChar;
            }
            decyptedArr.push(decypted);
        } else {
            decypted = commandToDecrypt;
            decyptedArr.push(decypted);
        }
    }

    let pattern = /@(?<planetName>[A-Z][a-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldier>\d+)/

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decyptedArr) {
        let match = msg.match(pattern);

        if (match) {
            let { planetName, type } = match.groups;

            if (type == "A") {
                attackedPlanets.push(planetName);
            } else {
                destroyedPlanets.push(planetName);
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        attackedPlanets.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        destroyedPlanets.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    }
}
starEnigma(['3',

    "tt(''DGsvywgerx>6444444444%H%1B9444",

    'GQhrr|A977777(H(TTTT',

    'EHfsytsnhf?8555&I&2C9555SR']);