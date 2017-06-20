function palindrome(word) {
    let palindrom=true;
    for(let i=0;i<word.length/2;i++){
        if(word[i]!=word[word.length-1-i]){
            palindrom=false;

        }

    }
    if(palindrom==true){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
palindrome("unitinu");