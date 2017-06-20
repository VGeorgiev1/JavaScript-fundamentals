function sumbytwon(input) {
    let counts={};
    let regex=/\w+/g;
    let matches=regex.exec(input);
    let words=[];
    while(matches){
        words.push(matches[0]);
        matches=regex.exec(input);

    }

    for(let i=0;i<words.length;i++){
        if(!counts.hasOwnProperty(words[i])){
                counts[words[i]]=0;

        }
        counts[words[i]]+=1;
    }
    console.log(JSON.stringify(counts));
}
sumbytwon(['Far too slow, you\'re far too slow.']);