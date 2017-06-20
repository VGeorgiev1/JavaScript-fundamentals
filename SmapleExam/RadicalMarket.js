function market(input) {
   let personSubs=new Map();
   let subscriptions={};
    for(let i=0;i<input.length;i++){
        let row=input[i];

        if(row.indexOf('-')==-1){
            if(!personSubs.has(row)){
                personSubs.set(row,new Set());
                subscriptions[row]=new Set();
            }
        }
        else{
            let townkens=row.split('-');
            let fPerson=townkens[0];
            let sPerson=townkens[1];
            if(fPerson!=sPerson) {
                if (personSubs.has(fPerson) && personSubs.has(sPerson)) {
                    personSubs.get(sPerson).add(fPerson);
                    subscriptions[fPerson].add(sPerson);

                }
            }
        }

    }
    let marketArr=[...personSubs];

    for(let i=0;i<marketArr.length;i++){
        marketArr[i][1]=[...marketArr[i][1]];
    }

    function mysort(a,b) {
        let aLenght=a[1].length;
        let bLenght=b[1].length;
        if(bLenght-aLenght!=0){
          return bLenght-aLenght;
        }
        return subscriptions[b[0]].size-subscriptions[a[0]].size

    }
    marketArr.sort(mysort);
    console.log(marketArr[0][0]);
    let count=1;

    for(let i=0;i<marketArr[0][1].length;i++,count++){
        console.log(`${count}. ${marketArr[0][1][i]}`);
    }

}
market([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'

]);