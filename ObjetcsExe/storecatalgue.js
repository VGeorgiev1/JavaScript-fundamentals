function stroecatalogue(input) {
    let catalogue=new Map();
    let letters=new Map();
    for(let i=0;i<input.length;i++){
        let townkens=input[i].split(' : ');
        let product=townkens[0];
        let price=Number(townkens[1]);
        catalogue.set(product,price);
        if(!letters.has(product[0])){
            letters.set(product[0],0);
        }
        letters.set(product[0],letters.get(product[0])+1);
    }

    let arr=[...catalogue];
    let letarr=[...letters];
    letarr.sort(letsort);
    //console.log(letarr);

    function letsort(a,b) {
        return a[0].localeCompare(b[0]);
    }
    function mysrot(a,b) {
        let aProduct=a[0].toLowerCase();
        let bProduct=b[0].toLowerCase();
        return aProduct.localeCompare(bProduct);
    }
    arr.sort(mysrot);
    //console.log(arr);
    let index=0;
    //console.log(letarr[0][1]);
    for(let i=0;i<letarr.length;i++){
        console.log(letarr[i][0]);
        for(let j=0;j<letarr[i][1];j++){
            console.log(`  ${arr[index][0]}: ${arr[index][1]}`);
            index++;
        }

    }
}
stroecatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'

]);