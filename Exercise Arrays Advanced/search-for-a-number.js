function searchForANumber(arr1, arr2){
//the first is the number of elements we have to take
//the second is the number of elements we have to delete from the taken
//the third is the number we look for

    let newArr = arr1.splice(0, arr2[0]);
    
    newArr.splice(0, arr2[1]);

    let count = 0;
    let number = arr2[2];

    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === number){
            count++;
        }
    }
    
        console.log(`Number ${number} occurs ${count} times.`)
    }



searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3]);