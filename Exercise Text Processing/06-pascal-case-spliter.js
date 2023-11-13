function pascalCaseSpliter(str){
    ;let wordsArr = [];
    let currWord = '';
    
    for(let i = 0; i < str.length; i++){
        let char = str[i];

        if(char == char.toUpperCase()){
            if(currWord){
                wordsArr.push(currWord);
                currWord = ''
            }
        }

        currWord += char;
    }

    if(currWord){
        wordsArr.push(currWord)
    }

    console.log(wordsArr.join(', '));
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')