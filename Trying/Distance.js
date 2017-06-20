/**
 * Created by Vanko on 23.10.2016 г..
 */
function aDistance(input){
    var x1=Number(input[0]);
    var y1=Number(input[1]);
    var x2=Number(input[2]);
    var y2=Number(input[3]);

    var y=Math.abs(y1)+Math.abs(y2);
    var x=Math.abs(x1)+Math.abs(x2);

    var distance=Math.sqrt((y*y)+(x*x));
    if((x1==x2) || (y1==y2)){
        if(x1==x2){
            if(Math.abs(y1)>Math.abs(y2)){
                distance=Math.abs(y1)-Math.abs(y2);
            }
            else if(Math.abs(y2)>Math.abs(y1)){
                distance=Math.abs(y1)-Math.abs(y2);
            }
            else{
                distance=0;
            }
        }


    }

    console.log(Math.abs(distance));

}