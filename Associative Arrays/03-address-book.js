function addressBook(arr){
    let book = {};

    for(let el of arr){
        let [person, address] = el.split(':');

        book[person] = address;
    }

    let sorted = {};
    let entries = Object.entries(book).sort((a,b) => a[0].localeCompare(b[0]));
    for(let [person,address] of entries){
        sorted[person] = address;
        console.log(`${person} -> ${address}`);
    }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);