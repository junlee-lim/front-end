const randomValue = random(9);

function random(n1){
    let a = parseInt(Math.random()*n1)
    return a;
}

console.log(randomValue);