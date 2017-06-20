function countoccurance(search,arr) {
    let searchword=search;
    let index=0;
    let count=0;
    for(let i=arr.length-2;i>=0;i--){
        index=arr.indexOf(searchword);


        if(index>-1){
            count++;
          arr=arr.substr(index+1);
        }
        else{
            console.log(count);
            break;
        }


    }

}
countoccurance('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');