function usernames(input) {
    let username='';
    let index=0;
    let usernames=[];
    for(let i=0;i<input.length;i++){
     username='';
     username+=input[i].substr(0,input[i].indexOf('@'));
     let domain=input[i].substr(input[i].indexOf('@')+1);
     let thingies=domain.split(".");
     username+='.';
     for(let i=0;i<thingies.length;i++){
         username+=thingies[i][0];
     }
    usernames.push(username);

    }
    console.log(usernames.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);