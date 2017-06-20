function color(input){
    var a =Number(input[0]);
    console.log("<ul>\n");
    for(var i=1;i<=a;i++){
        if(i%2!=0){
            console.log("<li><span style='color:green'>"+i+"</span></li>");

        }
        else{
            console.log("<li><span style='color:blue'>"+i+"</span></li>");
        }




    }
    console.log("<ul>\n");



}
