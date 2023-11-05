function convertToObject(jsonStr){
    let person = JSON.parse(jsonStr);

    let entries = Object.entries(person);
    
    for(let entry of entries){
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')