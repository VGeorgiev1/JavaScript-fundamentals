function endswith(string,substring) {

   // console.log(string.lastIndexOf(substring));
    if(string.indexOf(substring)==-1 || string.indexOf(substring)!=string.length-substring.length){
        console.log(false);
    }
    else{
        console.log(true);
    }



}
endswith('The new iPhone has no headphones jack.', 'o headphones jack.');