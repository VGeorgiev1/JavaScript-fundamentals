/**
 * Created by Vanko on 23.10.2016 г..
 */
function SumAndVat(input) {
    let sum=0;
    for(var num of input)
        sum+=Number(num);
        console.log("sum = "+sum);
        console.log("VAT = "+sum*0.2);
        console.log("total = "+sum*1.2);

}