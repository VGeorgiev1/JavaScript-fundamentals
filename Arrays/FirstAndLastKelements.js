function sumfirstlast(input) {
    let index=input[0];
    input=input.slice(1);
    //console.log(input);
    let first=input.slice(0,index);
    let last=input.slice(input.length-index);

    console.log(first.join(' '));
    console.log(last.join(' '));
}
sumfirstlast([3,
    6, 7, 8, 9]
);