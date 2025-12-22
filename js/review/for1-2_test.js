const ran = parseInt(Math.random()*5)+3;
console.log(ran);

// let a=''
// for(let i=0; i<ran; i++){
//     for(let j=0; j<i+1; j++){
//         a = a+'*';
//     }
//     a=a+'\n'
// }
// console.log(a)

let a=''
for(let i=0; i<ran; i++){
    for(let j=0; j<i+1; j++){
        a = a+'*';
    }
    console.log(a)
}
