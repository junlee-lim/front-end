// for(let i=2; i<10; i++){
//     if(i != 2){
//         console.log('---------')
//     }
//     for(let a=1; a<10; a++){
//         console.log(`${i} x ${a} = ${i*a}`)
//     }
// };

let a = true
for(let b=2; b<10; b++){
    if(a){
        a=false
    }else{
        console.log('---------')
    }
    for(let c=1; c<10; c++){
        console.log(`${b} x ${c} = ${b*c}`)
    }
}