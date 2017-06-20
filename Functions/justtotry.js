function convert(grads) {
    let gradsToConvert = grads;
    let converted = (gradsToConvert * 0.9) % 360;

    if (converted < 0) {
        console.log(converted + 360);
    } else {
        console.log(converted);
    }
}
convert(-360);