function autocompany(input) {
    let market=new Map();
    for(let i=0;i<input.length;i++){
        let towkens=input[i].split(' | ');
        let brand=towkens[0];
        let model=towkens[1];
        let amount=Number(towkens[2]);

        if(!market.has(brand)){
            market.set(brand, new Map());
        }
        if(!market.get(brand).has(model)){
            market.get(brand).set(model,0);
        }
        market.get(brand).set(model,market.get(brand).get(model)+amount);
    }
    let arr=[...market.entries()];

    let onemore=[...arr[0][1]];
    let arrofmodels=[];
    for(let i=0;i<arr.length;i++){
        let onemore=[...arr[i][1]];
        arrofmodels.push(onemore);
    }
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i][0]}`);
        for(let j=0;j<arrofmodels[i].length;j++){
            console.log(`###${arrofmodels[i][j][0]} -> ${arrofmodels[i][j][1]}`);
        }

    }

}
autocompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

]);