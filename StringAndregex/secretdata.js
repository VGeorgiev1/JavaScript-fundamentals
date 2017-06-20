function secretdata(input) {
    let names=/\*[A-Z]{1}[A-Za-z]+(?= |\t|$)/g;
    let phones=/\+[0-9\-]{10}(?= |\t|$)/g;
    let ids=/![A-Za-z0-9]+(?= |\t|$)/g;
    let namesofbase=/\_[0-9A-Za-z]+(?= |\t|$)/g;


    for(let i=0;i<input.length;i++){
        input[i]=input[i].replace(names, n=> "|".repeat(n.length));
        input[i]=input[i].replace(phones, n=> "|".repeat(n.length));
        input[i]=input[i].replace(ids, n=> "|".repeat(n.length));
        input[i]=input[i].replace(namesofbase, n=> "|".repeat(n.length));
        console.log(input[i]);
    }


}
secretdata(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.']
);









