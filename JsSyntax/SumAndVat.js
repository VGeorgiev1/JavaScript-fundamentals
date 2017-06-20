function sumandVat(input) {

    let sum=0;
    input.forEach(el => {
            sum+=Number(el);
    });
    let vat=0.2*sum;
    console.log("sum = "+sum);
    console.log("VAT = "+vat);
    console.log("total = "+(vat+sum));
}
sumandVat([1.20, 2.60, 3.50]);
