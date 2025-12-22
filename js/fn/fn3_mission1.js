printStarLine(5);

function printStarLine(num){
    let a='';
    for(let i=0; i<num; i++){
        a=a+'*';
    }
    console.log(a)
}

console.log('square--------------------')
printStarSquare(5);

// function printStarSquare(num){
//     let a='';
//     for(let i=0; i<num; i++){
//         for(let j=0; j<num; j++){
//             a=a+'*'
//         }
//         a=a+'\n'
//     }
//     console.log(a)
// }

function printStarSquare(num){
    for(let i=0; i<num; i++){
        printStarLine(num)
    }
}