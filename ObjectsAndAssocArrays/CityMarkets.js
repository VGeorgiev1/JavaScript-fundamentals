function citymarket(input){
    let market=new Map();

    for(let i=0;i<input.length;i++){
        let [town, product, amount, price]=input[i].split(/[->:]/).filter(el => el!="").map(el=> el.trim());
        if(!market.has(town)){
            market.set(town,new Map());
        }
        if(!market.get(town).has(product)){
            market.get(town).set(product, 0);
        }
        let old=market.get(town).get(product);
        market.get(town).set(product, old+ Number(amount)*Number(price));

    }
    for(let [town, products] of market){
        console.log(`Town - ${town}`);
        for(let [product, sales] of products){
            console.log(`$$$${product} : ${sales}`);
        }

    }

}
citymarket([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3',
]);