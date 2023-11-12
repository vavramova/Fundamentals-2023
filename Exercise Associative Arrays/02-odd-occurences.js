function oddOccurences(str){
    let strLower = str.toLowerCase();
    let arr = strLower.split(' ');
    let occurences = {};

    for(let word of arr){
      if(!(word in occurences)){
            occurences[word] = 0;
        } else {
            occurences[word]++;
        }
    }

    let entries = Object.entries(occurences);
    let left = [];

    for(let [word, occ] of entries){
        if((occ % 2 == 0)){
            left.push(word)
        }
    }
    console.log(left.join(' '));
}


oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
//oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')