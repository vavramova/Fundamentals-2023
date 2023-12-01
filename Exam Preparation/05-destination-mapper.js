function destinationMapper(str){
    let pattern = /([=|\/])(?<destination>[A-Z][A-Za-z]{3,})\1/g;
    let matches = str.matchAll(pattern);
    let destinations = [];
    if(matches){
    for(let match of matches){
        let validDest = match.groups.destination;
        destinations.push(validDest);
    }
    }
    let travelPoints = 0;
    destinations.forEach(destination => travelPoints += destination.length);

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");