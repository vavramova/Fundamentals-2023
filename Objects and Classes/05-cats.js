function cats(catsasStrings){
    class Cat {
        name;
        age;

        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let catsAsString of catsasStrings){
        let tokens = catsAsString.split(' ');
        let catName = tokens[0];
        let catAge = Number(tokens[1]);

        let cat = new Cat(catName,catAge);

        cat.meow();

    }

}

cats(['Mellow 2', 'Tom 5'])