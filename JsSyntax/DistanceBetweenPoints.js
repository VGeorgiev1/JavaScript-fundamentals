function distance(x1,y1,x2,y2) {
    let y=Math.abs(y1-y2);
    let x=Math.abs(x1-x2);

    let z=Math.sqrt(y*y+x*x);

    console.log(z);

}
distance(2.34, 15.66, -13.55, -2.9985);

