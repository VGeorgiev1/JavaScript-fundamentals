function nelement(input) {
    let steps=Number(input[input.length-1]);
    input.pop();
    let counter=0;

    for(let i=0;i<input.length;i++){
        if(i==0 || counter==steps){
            console.log(input[i]);
            counter=0;

        }
        counter++;

    }
}
nelement([
        1,
        2,
        3,
        4,
        5,
        6

    ]
);