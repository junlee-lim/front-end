function printStarLine(num){
    let a= '';
    for(let i=0; i<num; i++){
        a=a+'*';
    }
    console.log(a)
}

console.log('-------------------')

printStarSquare(5);

function printStarSquare(num){
    for(let i=0; i<num; i++){
        printStarLine(num)
    }
}

console.log('-------------------')

printStarTriangle(5);

function printStarTriangle(num){
    for(let i=1; i<num; i++){
        printStarLine(i)
    }
}