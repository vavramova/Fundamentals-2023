function charactersInRange(char1, char2){
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let result = '';

    let start = Math.min(code1, code2);
    let end = Math.max(code1, code2);

    for(let curCode= start + 1; curCode < end; curCode++){
        let curChar = String.fromCharCode(curCode);
        result += curChar + ' '
    }
    console.log(result);
}

charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');