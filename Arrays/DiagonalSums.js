function diagonals(input) {
    let sum1=0;
    let sum2=0;
    for(let i=0;i<input.length;i++){
            sum2+=input[i][input[i].length-(i+1)];
            sum1 += input[i][i];
    }

    console.log(sum1+" "+sum2);

}
diagonals([[20, 40],
    [10, 60]]
);