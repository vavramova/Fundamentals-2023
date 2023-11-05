function inventory(arr){
   let heroArr = [];

   for(let string of arr){
    let [heroName, level, items] = string.split(' / ');
    level = Number(level);
    let hero = { name: heroName, level: level, items: items};
    heroArr.push(hero);
   }

   heroArr.sort((a,b) => a.level - b.level);

   heroArr.forEach((hero) => {console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)});
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])