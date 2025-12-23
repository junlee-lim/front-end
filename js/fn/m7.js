const arr=[10, 8, 4, 88, 65, 3, 99];

const sumArr = arr => {
    let b = 0
    for(let i=0; i<arr.length; i++){
        b = b + arr[i]
    }
    return b
}

const sum = sumArr(arr); //계산을 하고 불러오는 거이기 때문에 '호출'
console.log(sum)


// const arr=[10, 8, 4, 88, 65, 3, 99];

// function sumArr(arr){
//     let b = 0
//     for(let i=0; i<arr.length; i++){
//         b = b + arr[i]
//     }
//     return b
// }
// const sum = sumArr(arr);
// console.log(sum)