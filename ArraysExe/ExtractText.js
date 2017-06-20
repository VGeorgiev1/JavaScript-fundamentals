function extract(input) {
    let start=0;
    let end=0;
    let str=input;
    let result=[];

    while(1){
        start=str.indexOf('(');
        if(start>-1) {
            str = str.substr(start + 1);
            end=str.indexOf(')');
            result.push(str.substr(0,end));
        }
        else{
            console.log(result.join(', '));
            break;
        }

    }
}
extract('(Bulgarian brandy) is self-made liquor (alcoholic drink).It can be made from grapaes(even apples).');