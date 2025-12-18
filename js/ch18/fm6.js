const star = parseInt(Math.random() * 5) + 3
console.log(star)

// let a=''
// for(let i=0; i<star; i++){
//     for(let i=0; i<star; i++){
//         a = a + '*'
//     }
//     a = a+ '\n'
// }
// console.log(a)


// for(let i=0; i<star; i++){
//     let a = ''
//     for(let i=0; i<star; i++){
//         a = a + '*'
//     }
//     console.log(a)
// }

let a =''
for(let i=0; i<star; i++){
    a = a + '*'
}
for(let j=0; j<star; j++){
    console.log(a)
}

// let a =''
// for(let i=0; i<star; i++){
//     for(let j=0; j<star; j++){
//         a = a + '*'
//     }
//     console.log(a)
// }