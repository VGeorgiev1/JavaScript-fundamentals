function spiral(a,b) {
    function createArray(length) {
        let arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            let args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
    let matrix=createArray(a,b);

    let row=0;
    let col=0;
    let direction="right";
    let final=a*b;
    for(let i=1;i<=final;i++){


        switch (direction){
            case "right":
                matrix[row][col]=i;
                col++;
                if(col==a-1 || matrix[row][col]!=undefined){
                    if(matrix[row][col]!=undefined){
                        row++;
                        col--;
                    }
                    direction="down";

                }
                break;
            case "down":
                matrix[row][col]=i;
                row++;
                if(row==a-1 || matrix[row][col]!=undefined){
                    if(matrix[row][col]!=undefined){
                        col--;
                        row--;
                    }
                    direction="left";
                }
                break;
            case "left":
                matrix[row][col]=i;
                col--;
                if(col==0 || matrix[row][col]!=undefined){
                    if(matrix[row][col]!=undefined){
                        col++;
                        row--;
                    }
                    direction="up";
                }
                break;
            case "up":
                matrix[row][col]=i;
                row--;
                if(matrix[row][col]!=undefined){
                    direction="right";
                    row++;
                    col++;
                }
                break;
        }

    }

    for(let i=0;i<matrix.length;i++){
        console.log(matrix[i].join(" "));
    }
}
spiral(7,7);

