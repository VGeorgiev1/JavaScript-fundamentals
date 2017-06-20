function text(data) {
    let regex=/^([A-Z][a-zA-Z]+) - (\d+) ([A-Za-z0-9 \-]+)$/g;
    let result=regex.exec(text);
    for(let i=0;i<data.length;i++){
        let match=regex.exec(data[i]);
        
    }
}