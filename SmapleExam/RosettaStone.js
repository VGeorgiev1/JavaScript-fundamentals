function rosetta(input) {

    let size=Number(input.shift());

    let stone=[];
    let matrix=[];
    for(let i=0;i<size;i++){
       let row=input[i].split(' ').map(x => Number(x));
       stone.push(row);
    }
    for(let i=0;i<size;i++){
        input.shift();
    }
    for(let i=0;i<input.length;i++){
        let curRow=input[i].split(' ').map(x=>Number(x));
        matrix.push(curRow);
    }
    let end=0;
    let rowend=0;
    let xend=0;
    let yend=0;
    let stonex=0;
    let stoney=0;
    let tobreaky=0;
    let tobreakx=0;
    for(let y=0;tobreaky!=1;y+=size){
        if(y>input.length){
            break;
        }
        yend=y+size;

        if(yend>=input.length){
            yend=input.length;
        }
        for(let x=0;tobreakx!=1;x+=size) {
            if(x>input.length){
               break;
            }
            xend=x+size;
            stoney=0;
            if(xend>=input.length){
                xend=input.length;
            }
            for(let j=y;j<yend;j++,stoney++){
                for(let h=x;h<xend;h++,stonex++){

                    matrix[j][h]=matrix[j][h]+stone[stoney][stonex];
                }
                stonex=0;
            }
        }

        xend=0;
        tobreakx=0;
    }
    console.log(matrix);



}

rosetta(
    [   '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22' ]

);