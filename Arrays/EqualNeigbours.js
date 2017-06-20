function equalNeighbors(input) {
    let counter=0;

    for(let i=0;i<input.length-1;i++){
        for(let j=0;j<input[i].length-1;j++){

            if(input[i][j]==input[i][j+1]){

                counter++;
            }
            if(input[i][j]==input[i+1][j]){

                counter++;
            }


        }

    }
    for(let i=0;i<input[input.length-1].length-1;i++){
        if(input[input.length-1][i]==input[input.length-1][i+1]){

            counter++;
        }
    }
    for(let i=0;i<input.length-1;i++){
        if(input[i][input[i].length-1]== input[i+1][input[i].length-1]){
            counter++;

        }

    }
console.log(counter);

}
equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '2'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '5']]
);