const randomValue = random(3, 9);

function random(n1, n2){
    let btn = parseInt(Math.random()*(n2-n1)) + n1;
    return btn;
}

console.log(randomValue);