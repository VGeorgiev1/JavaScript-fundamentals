function chessBoard(num) {
    console.log('<div class="chessboard">');
    let color="black";
    let color2="";
    for(let i=0;i<num;i++){
        console.log("<div>");
        for(let j=1;j<=num;j++){
            if(i%2==0){
                console.log(`    <span class="${color}"></span>`);
                if(color=="black"){
                    color="white";
                }
                else{
                    color="black";
                }
            }
            else{
                if(num%2!=0) {
                    console.log(`    <span class="${color}"></span>`);
                    if (color == "white") {
                        color = "black";
                    }
                    else {
                        color = "white"
                    }
                }
                else{
                    if (color == "white") {
                        color = "black";
                    }
                    else {
                        color = "white"
                    }
                    console.log(`    <span class="${color}"></span>`);


                }

            }

        }

        console.log("</div>");
    }
    console.log("</div>");
}
chessBoard(2);