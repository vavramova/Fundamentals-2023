function emojiDetector(arr){
    let string = arr.shift();
    let pattern = /(::|\*{2})[A-Z][a-z]{2,}\1/gm;
    let digitPattern = /[0-9]/gm;
    let validEmojis = [];


    let matches = string.match(pattern);
    let digitMatches = string.match(digitPattern);

    let threshold = digitMatches.map(Number).reduce((acc,val) => acc * val);
    
    for(let match of matches){
        validEmojis.push(match);
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
    for(let emoji of validEmojis){
        let coolness = 0;
        for(let i = 2; i <= emoji.length-3; i++){
            coolness += emoji[i].charCodeAt();
        }
        
        if(coolness >= threshold){
            console.log(emoji);
        }
    }
}

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])