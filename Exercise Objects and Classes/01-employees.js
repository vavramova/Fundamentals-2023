function employees(arr){
    let employee = {};
    for(let people of arr){
        employee[people] = Number(people.length);
    }
    let entries = Object.entries(employee);

    for(let [employeeName, personalNum] of entries){
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])