function unique(input) {
    let uniquearr=new Set();
    for(let i =0;i<input.length;i++){
        let arr=input[i].split(/[[\],]/g).filter(x=>x!='').map(x=>Number(x));

        arr.sort((a,b)=>{
         return  b-a;
       });

       let arrAstring=arr.toString();

        uniquearr.add(arrAstring);

    }

    let parsed=Array.from(uniquearr);
    let helpingmatrix=[];
    for(let i=0;i<parsed.length;i++){
        let curArr=parsed[i].split(',').map(x => Number(x));
        helpingmatrix.push(curArr);
    }
    helpingmatrix.sort(mysort);
    function mysort(a,b) {
        return a.length-b.length;
    }
    for(let i=0;i<helpingmatrix.length;i++){
        console.log(`[${helpingmatrix[i].join(', ')}]`);
    }

}
unique([
        '[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18',
        '[7.339, 7.180, 7.14, 80.099]',
        '[8, 8, 10, 80.099, 9]'
]);