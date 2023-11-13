function censoredWords(str, word){
    let censor = '*'.repeat(word.length);
    let result = str;

    while(result.includes(word)){
        result = result.replace(word, censor);
    }

    console.log(result);
}

censoredWords('A small sentence with some words',

'small')