printStarLine(5);

function printStarLine(num){
    let a='';
    for(let i=0; i<num; i++){
        a=a+'*';
    }
    console.log(a)
}

console.log('triangle--------------------')
printStarTriangle(5);

// function printStarTriangle(num){
//     let a='';
//     for(let i=1; i<num; i++){
//         for(let j=0; j<i; j++){
//             a=a+'*'
//         }
//         a=a+'\n'
//     }
//     console.log(a)
// }

function printStarTriangle(num){
    for(let j=1; j<=num; j++){
        printStarLine(j)
    }
}