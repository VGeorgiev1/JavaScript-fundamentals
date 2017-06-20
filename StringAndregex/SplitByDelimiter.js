function bydelimiter(string,delimiter) {

    let splitted=string.split(delimiter);


    console.log(splitted.join("\n"));


}
bydelimiter('http://platform.softuni.bg', '.');