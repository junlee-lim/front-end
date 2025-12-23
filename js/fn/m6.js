const arr=[10, 8, 4, 88, 65, 3];
const max = findMax(arr);

function findMax(arry){
    let maxNum = arr[0];
    for(let i=1; i<arry.length; i++){
        if(maxNum<arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(max);

//arrow 형식
// const arr=[10, 8, 4, 88, 65, 3];

// const findMax = arry => {
//     let maxNum = arr[0];
//     for(let i=1; i<arry.length; i++){
//         if(maxNum<arr[i]){
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }

// const max = findMax(arr);
// console.log(maxNum);