function magic(input) {
    let sum=0;
    let no=0;
    let curSum=0;

    for(let i=0;i<input.length;i++){

        for(let j=0;j<input[i].length;j++){
            curSum+=input[i][j];
        }

        if(sum==0 || curSum==sum){
            sum=curSum;
        }
        else{
            no=1;
            break;
        }
        curSum=0;
    }
    curSum=0;
    if(no!=1) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                curSum += input[j][i];
            }

            if (sum == 0 || curSum == sum) {
                sum =curSum;
            }
            else {

                no = 1;
                break;
            }
            curSum=0;
        }
    }
    if(no==0){
        console.log(true);
    }
    else{
        console.log(false);
    }

}
magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

);