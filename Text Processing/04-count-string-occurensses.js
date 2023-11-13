function countStrOcc(str, word){
    let counter = 0;
    let singleWords = str.split(' ');

    for(let words of singleWords){
        if(words == word){
            counter++;
        }
    }

    console.log(counter);
}

countStrOcc('This is a word and it also is a sentence',

'is')