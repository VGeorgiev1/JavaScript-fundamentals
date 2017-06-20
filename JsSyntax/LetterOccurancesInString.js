function occurance(word,letter) {

        let count=0;
        let i=0;
        for(;i<word.length;i++){
            if(word[i]==letter){
                count++;
            }
        }
        console.log(count);

}
occurance('hour', 'h');


