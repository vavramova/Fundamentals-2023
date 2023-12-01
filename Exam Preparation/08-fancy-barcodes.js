function fancyBarcodes(arr){
    let n = Number(arr.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let validBarcodes = [];

    for(let codes of arr){
        let match = codes.match(pattern);

        if(match){
            validBarcodes.push(codes);
            let group = [];
            let digitPattern = /[0-9]/g;
     
            let matches = codes.match(digitPattern);
            if(matches){
            matches.forEach(match => group.push(match));
            }
            if(group.length == 0){
             console.log(`Product group: 00`);
            }else if(group.length ==1){
            console.log(`Product group: ${group}`);
            }else{
             console.log(`Product group: ${group.join('')}`);
            }
        }else{
            console.log("Invalid barcode");
        }
    }

}

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
