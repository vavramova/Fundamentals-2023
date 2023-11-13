function cutAndReverce(str){
    let middleIndex = str.length / 2;

    let leftHalf = str.slice(0, middleIndex).split('').reverse().join('');
    let rightHalf = str.slice(middleIndex).split('').reverse().join('');

    
    console.log(leftHalf);
    console.log(rightHalf);

}

cutAndReverce('tluciffiDsIsihTgnizamAoSsIsihT')