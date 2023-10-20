function arrayModifier(arr){
    let arr1 = arr.shift().split(' ').map(Number);
    
    let finish = arr.pop();

    for(let commands of arr){
        let action = commands.split(' ');
        let command = action[0];
        let idx1 = Number(action[1]);
        let idx2 = Number(action[2]);

        if(command == 'swap'){
            let t = arr1[idx1];
            arr1[idx1] = arr1[idx2];
            arr1[idx2] = t;
        } else if(command == 'multiply'){
            let multiplied = arr1[idx1] * arr1[idx2];
            arr1.splice(idx1, 0, multiplied);
            arr1.splice(idx1+ 1, 1);
        } else if(command == 'decrease'){
          for(let i =0; i < arr1.length; i++){
            arr1[i] -= 1;
          }
        }
    }
    console.log(arr1.join(', '));

}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );