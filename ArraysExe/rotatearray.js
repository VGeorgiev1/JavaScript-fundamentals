function rotate(input) {
    let rotates=Math.floor(Number(input[input.length-1]));
    input.pop();
    for(let i=0;i<rotates;i++){
        let lastnumb=input[input.length-1];
        input.pop();
        input.unshift(lastnumb);

    }
    console.log(input.join(" "));


}
rotate(["Banana",
    "Orange",
    "Coconut",
    "Apple",
    "15",
]);