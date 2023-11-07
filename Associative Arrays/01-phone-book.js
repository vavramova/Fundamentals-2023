function phoneBook(arr){
    let persons = {};

    for(let el of arr){
        let [person, number] = el.split(' ');

        persons[person] = number;
    }

    let entries = Object.entries(persons);

    for(let [person, number] of entries){
        console.log(`${person} -> ${number}`);
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);