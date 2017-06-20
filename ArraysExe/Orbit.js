function orbit(input) {

    function createArray(length) {
        let arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            let args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
    let a=input[0];
    let b=input[1];
    let x=input[2];
    let y=input[3];

    let matrix=createArray(input[0],input[1]);

    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++){
            matrix[i][j]=0;
        }
    }
    let topright=0;
    let topleft=0;
    let botleft=0;
    let botright=0;

    matrix[x][y]=1;
    if(x+1<a) {

        botleft+=0.5;
        botright+=0.5;
    }
    if(x-1>=0){

        topright+=0.5;
        topleft+=0.5;
    }
    if(y+1<b){

        topright+=0.5;
        botright+=0.5
    }
    if(y-1>=0){

        topleft+=0.5;
        botleft+=0.5
    }
    if(topright==1){
        matrix[x-1][y+1]=2;
    }
    if(topleft==1){
        matrix[x-1][y-1]=2;
    }
    if(botright==1){
        matrix[x+1][y+1]=2;
    }
    if(botleft==1){
        matrix[x+1][y-1]=2;
    }
    botleft=0;
    botright=0;
    topleft=0;
    topright=0;
    let counter=3;
    let move=0;

    for(let i=2;i<input[0];i++,counter++){
        botleft=0;
        botright=0;
        topleft=0;
        topright=0;
        if(x+i<a) {

            botleft+=0.5;
            botright+=0.5;
        }
        if(x-i>=0){

            topright+=0.5;
            topleft+=0.5;
        }
        if(y+i<b){

            topright+=0.5;
            botright+=0.5
        }
        if(y-i>=0){

            topleft+=0.5;
            botleft+=0.5
        }
        if(topright==1){
            matrix[x-i][y+i]=counter;
        }
        if(topleft==1){
            matrix[x-i][y-i]=counter;
        }
        if(botright==1){
            matrix[x+i][y+i]=counter;
        }
        if(botleft==1){
            matrix[x+i][y-i]=counter;
        }



    }
    let count=0;
    let start=-1;
    let end=0;
    let number=0;
    for(let i=0;i<matrix.length;i++){
        start=-1;
        end=0;
        number=0;
        for(let j=0;j<matrix[i].length;j++){

            if(matrix[i][j]!=0 && matrix[i][j]!=1){
                count++;
                if(start==-1) {
                    start = j;
                    number=matrix[i][j];
                }
                else{
                    end=j;
                }

            }

        }
        if(end!=0) {
            for (let z = start; z < end; z++) {
                matrix[i][z] = number;
            }
        }
        else{
            for(let n=start;n>=0;n--){
                matrix[i][n]=number;
            }
        }

    }
    for(let i=0;i<matrix.length;i++){
        start=-1;
        end=0;
        number=0;
        if(i!=y) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[j][i] != 0) {
                    if (start == -1) {
                        start = j;
                        number = matrix[j][i];
                    }
                    if(number==matrix[j][i]) {
                        end = j;
                        break;
                    }
                    else{
                        start=j;
                        number=matrix[j][i];
                    }
                }

            }

        }
        console.log(end);
        if(end!=0){
            for (let z = start; z > end; z++) {
                matrix[z][i] = number;
            }
        }
        else{
            for(let n=start;n>=0;n--){
                matrix[n][i]=number;
            }
        }// console.log(start,end,number);
    }


    for(let i=0;i<matrix.length;i++){
        console.log(matrix[i].join(" "));
    }





    
}
orbit([7,7,3,6]);