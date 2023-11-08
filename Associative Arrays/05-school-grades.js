function schoolGrades(arr){
    let obj= {};
    for(let el of arr){
        let splitted = el.split(' ');
        let student = splitted.shift();
        if(student in obj){
            for(let el of splitted){
            obj[student].push(el);
            }
        }else{
            obj[student] = splitted;
        }
        
    }
    let newObj = {};
    let entries = Object.entries(obj)
    for(let [student, arrGrades] of entries){
        let sum = 0;
        for(let el of arrGrades){
            sum += Number(el);
        }
        let avg = sum / arrGrades.length;
        newObj[student] = avg;
    }

    let kvp = Object.entries(newObj)
    let sorted = kvp.sort((a,b) => a[0].localeCompare(b[0]));
    for(let [student, average] of sorted){
        console.log(`${student}: ${average.toFixed(2)}`);
    }
   
}

schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6']);