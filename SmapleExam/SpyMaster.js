function spy(input) {
    let key=input[0];

    key = key.toLowerCase();
    let rowshown=0;
    let reg='(\\s|^)\\b';
    for(let i=0;i<key.length;i++){
        reg+='['+key[i].toLowerCase()+key[i].toUpperCase()+']';


    }
    reg+='\\b\\s+([A-Z!%$#]{8,})(\\s|,|\\.|$)';

   let regex=new RegExp(reg,'g');
   for(let i=1;i<input.length;i++){
       let match=regex.exec(input[i]);
       while(match){
       let toreplace=match[0];
       let tochange=toreplace.split(' ').filter(x=>x!='');
       let unchanged=tochange[1];
       tochange[1]=tochange[1].replace(/!/g,'1');
       tochange[1]=tochange[1].replace(/%/g,'2');
       tochange[1]=tochange[1].replace(/#/g,'3');
       tochange[1]=tochange[1].replace(/\$/g,'4');
       tochange[1]=tochange[1].replace(/[A-Z]/g,(match)=> match.toLowerCase());
       toreplace=toreplace.replace(unchanged,tochange[1]);

       input[i]=input[i].replace(match[0],toreplace);

       match=regex.exec(input[i]);
       }

    }
    for(let i=1;i<input.length;i++){
       console.log(input[i]);
    }

}
spy([
    'multiSpace',
    'multiSpace                                       ISFINEOK',
    'multiSpace  isFAILLLLLL, but this multiSpace  ISN!O%T#$#FA$IL',
    'and this one too multiSpace    !!##$$%%$$##!!, multiSpace    JJJSF%%#!',
    'and a wrong one now multiSpace    HUE_HUE_HUE'
]);