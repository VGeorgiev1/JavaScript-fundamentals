function dan(numb) {
    let dna="ATCGTTAGGG";
    let row="";
    let curlet=0;
    let stars=2;
    let lines=0;
    let increasing=0;
    for(let i=0;i<numb;i++){

        row += "*".repeat(stars) + dna[curlet] + "-".repeat(lines) + dna[curlet+1] + "*".repeat(stars);

        if(stars>0 && increasing==0) {
            stars--;
            lines+=2;
            if(stars==0){
                increasing=1;
            }
        }
        else if(stars<2 && increasing==1)
        {
            stars++;
            lines-=2;
            if(stars==2){
                increasing=0;
            }

        }
      curlet+=2;
      if(curlet==dna.length){curlet=0}

        console.log(row);
      row="";
  }

}
dan(40);