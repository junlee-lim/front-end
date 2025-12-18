for(let num = 2; num<10; num++){
    for(let i = 1; i<10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
        
    }
    if(num < 9)console.log('-----------------');
}

for(let num = 2; num<10; num++){
    if(num > 2)console.log('-----------------');
    for(let i = 1; i<10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
        
    }
}

// let isFirst = true;
// for(let num = 2; num<10; num++){
//     if(isFirst){
//         isFirst = false //처음에 2로 시작할 땐 true값이 false로 바뀌니까 바로 아래에 있는 for 구문으로 가는데 그 이후에는 if 괄호 안에 있는 값이 false면 else로 가니까 그 이후로는 계속 ---가 생김
//     } else{
//         console.log('-----------------');
//     }   
//     for(let i = 1; i<10; i++){
//         console.log(`${num} x ${i} = ${num*i}`)
//     }
// }