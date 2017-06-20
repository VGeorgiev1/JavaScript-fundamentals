/**
 * Created by Vanko on 23.10.2016 г..
 */
function letinText([text,lett]) {
    var count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==lett){
            count++;
        }
    }
    console.log(count);
}