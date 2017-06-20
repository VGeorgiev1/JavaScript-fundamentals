function diagonal(input) {
   let sum1=0;
   let sum2=0;
   let matr=[];
   let diagonal=[];
   for(let i=0;i<input.length;i++){
    let curarr=input[i].split(" ").map(x => Number(x));
    matr[i]=curarr;

   }
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input[i].length;j++){
            if(j==i){

                sum1+=Number(matr[i][j]);
            }
        }
    }
    let c=0;
    let col=0;

    for(let i=input.length-1;i>=0;i--,c++,col++){
        sum2+=matr[i][col];
        diagonal[c]=matr[i][col];


    }
    col=0;
    if(sum2==sum1){
        for(let i=0;i<matr.length;i++){
            for(let j=0;j<matr[i].length;j++){
                if(j!=i){
                    matr[i][j]=sum1;
                }
            }
        }
        c=0;
        for(let i=matr.length-1;i>=0;i--,c++,col++){
            matr[i][col]=diagonal[c];

        }
        for(let i=0;i<input.length;i++){
            console.log(matr[i].join(" "));

        }
    }
    else{
        for(let i=0;i<input.length;i++){
            console.log(matr[i].join(" "));

        }
    }


}
diagonal(['1 1 1',
    '1 1 1',
    '1 1 0']);