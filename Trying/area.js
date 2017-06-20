/**
 * Created by Vanko on 23.10.2016 г..
 */
function nextDate(input) {
    var a=Number(input[0]);
    var b=Number(input[1]);
    var c=Number(input[2]);
        switch(b){
            case 1:case 3:case 5:case 7:case 8:case 10:case 12:
                if(c==31 && b==12){
                    a++;
                    b=1;
                    c=1;
                }
                else if(c==31){
                    c=1;
                    b++;
                }
                else{
                    c++;
                }
                break;
            case 4:case 6:case 9:case 11:

            if(c==30){
                c=1;
                b++;
            }
            else{
                c++;
            }
            break;
            case 2:
             if(c==28){
                 c=1;
                 b++;

             }
             else{
                 c++;
             }
             break;
        }
        console.log(a+"-"+b+"-"+c);

}