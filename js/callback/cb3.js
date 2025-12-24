const arr = [3,88,76,9,34,65];

// const arr2 = arr.map(item => item + 2);
// console.log(arr2)

const arr2 = arr.map( item => {
    if(item%2 == 0){item = item + 2}
    return item;
})

//   = const arr2 = arr.map( item => {
//         if(item%2 == 1){return item}
//         return item + 2;
//     })

console.log(arr2)