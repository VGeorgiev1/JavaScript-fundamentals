function lowestprice(input) {
    let market={};
    let keys=new Set();
    for(let i=0;i<input.length;i++){
        let [town, product, price]=input[i].split(" | ");
        keys.add(product);
        price=Number(price);
        if(!market.hasOwnProperty(product)){
                market[product]={
                    price:price,
                    town:town
                };
            }
        if(market[product].price>price){
                market[product].price=price;
                market[product].town=town;
        }
        if(market[product].town==town){
                market[product].price=price;
        }
    }
   for(let key of keys){
        console.log(`${key} -> ${market[key].price} (${market[key].town})`);
   }
}
lowestprice(
[
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]
);