function format(input) {
    let text=input[0];
    let singlespaceafter=/[.,!?:;]\s*/g;
    let spaceafter=/\s+(?=[.,!?:;])/g;
    let manydots=/\.[.\s]{3,}!/g;
    let dates=/\.\s+(?=[0-9]+)/g;
    let quotoes=/"\s*.+\s*(?=")/g;
    text=text.replace(singlespaceafter,(match) => match.trim()+ " ");
    text=text.replace(spaceafter,'');
    text=text.replace(manydots,"...!");
    text=text.replace(dates,'.');
    let match=quotoes.exec(text);

    while(match){
        let tochange=match[0];
        tochange=tochange.substr(1);
        text=text.replace(tochange,tochange.trim());
        match=quotoes.exec(text);
    }
    console.log(text);
}
format(['Terribly formatted text    ?!    With chaotic spacings.            "    Terrible quoting"!       Also this date is pretty confusing : 20      . 12.    16 .Make,sure to give:proper spacing where is needed     .     .    . ! ']);