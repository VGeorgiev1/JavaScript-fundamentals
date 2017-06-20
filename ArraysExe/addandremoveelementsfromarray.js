function addandremove(input) {
    let curNumb=1;
    let result=[];
    for(let i=0;i<input.length;i++){
        if(input[i]=="add"){
            result.push(curNumb);

        }
        if(input[i]=="remove"){
            result.pop();

        }
        curNumb++;


    }
    if(result.length==0){
        console.log("Empty");
    }
    else {
        console.log(result.join("\n"));
    }
}
addandremove([
    "remove",
    "remove",
    "remove"
]);
