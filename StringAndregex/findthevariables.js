function variables(input) {
    let reg=/\b_[a-zA-Z0-9]+\b/g;

    let match=reg.exec(input);
    let result=[];
    while(match){
        result.push(match[0]);
        match=reg.exec(input);

    }
    console.log(result.map(x => x.slice(1)).join(','));
}
variables('The _id and _age variables are both integers.');