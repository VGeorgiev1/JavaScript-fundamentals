function towns(info) {
    info.shift();
    let towns=[];
    for(let i=0;i<info.length;i++){
        let tonkens=info[i]
            .split('|')
            .filter(x=>x!=='')
            .map(el=>el.trim());
        let curTown={
            Town:tonkens[0],
            Latitude:Number(tonkens[1]),
            Longitude:Number(tonkens[2])
        };
       // JSON.stringify(curTown);
        towns.push(curTown);
    }
    console.log(JSON.stringify(towns));
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);