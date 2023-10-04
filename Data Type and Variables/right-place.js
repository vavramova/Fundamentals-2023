function rightPlace (word, initial, word2) {
    let result = ''
    for(i = 0; i < word.length; i++){
        if(word[i] == "_"){
            result += initial;
        }else {
            result += word[i];
        }
    }
    if(result == word2){
        console.log("Matched");
    }else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I',

'Strong')