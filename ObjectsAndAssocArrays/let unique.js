function unique(input) {
    let unique=new Set();
    let text=input.join('\n');
    let words=text.split(/\W+/)
        .filter(e => e!=='')
        .map(e => e.toLowerCase())
        .forEach(e => unique.add(e));
    console.log([...unique].join(', '));
}
unique()
