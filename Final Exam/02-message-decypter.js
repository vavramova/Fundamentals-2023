function messageDecrypter(arr){
    let n = Number(arr.shift());
    let pattern = /^([$|%])(?<tag>[A-Z][a-z]{2,})\1:\s(?<numberOne>\[\d+\])\|(?<numberTwo>\[\d+\])\|(?<numberThree>\[\d+\])\|$/

    for(let i = 0; i < n; i++){
        let str = arr.shift();
        let check = pattern.exec(str);

        if(check){
            let tag = check[2];
            let num1 = Number(check[3].slice(1, check[3].length-1));
            let num2 = Number(check[4].slice(1, check[4].length-1));
            let num3 = Number(check[5].slice(1, check[5].length-1));

            let ch1 = String.fromCharCode(num1);
            let ch2 = String.fromCharCode(num2);
            let ch3 = String.fromCharCode(num3);

            let decrypted = ch1 + ch2+ ch3;

            console.log(`${tag}: ${decrypted}`);
        }else{
            console.log("Valid message not found!");
        }
    }
}

messageDecrypter(["3",

"This shouldnt be valid%Taggy%:[118]|[97]|[108]|",

"$tAGged$: [97][97][97]|",

"$Request$: [73]|[115]|[105]|true"])