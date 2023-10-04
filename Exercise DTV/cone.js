function cone(r, h){
    let v = (1/3)*Math.PI*r*r*h;
    let a = Math.PI*r*(r + Math.sqrt(r*r + h*h));

    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${a.toFixed(4)}`);
}
cone(3,

    5)