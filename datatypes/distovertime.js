function distOverTime(input){
        var v1=Number(input[0]);
        var v2=Number(input[1]);
        var time=Number(input[2]);
    var s1=v1*(time/3600);
    var s2=v2*(time/3600);
    if(s1>s2){
        console.log((s1-s2)*1000);
    }
    if(s2>s1){
        console.log((s2-s1)*1000);
    }



}