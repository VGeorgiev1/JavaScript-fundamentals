function inchtofeed(input){
    var binary=input[0];
    var dec=0;
    var l=binary.length;
    for (let i=0;i<=binary.length;i++){
        if(binary[l]=='1'){
        dec=dec+Math.pow(2,i);
        }
        l--;

    }
    console.log(dec);
}
