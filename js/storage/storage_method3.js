const arr = [
    {id: 'abc', name: 'ghd1'},
    {id: 'bcd', name: 'ghd2'},
    {id: 'cde', name: 'ghd3'}
]

// const obj = {};
// for(let i = 0; i<arr.length; i++){
//     obj[arr[i].id] = arr[i];
// }
const obj = {};
arr.forEach(i => {obj[i.id] = i})
console.log(obj);

// const obj = {
//     sdsd: {id: 'abc', name: 'ghd1'},
//     bcd: {id: 'bcd', name: 'ghd2'},
//     cde: {id: 'cde', name: 'ghd3'}
// };
// console.log(obj['abc'])
// console.log(obj)

// console.log(arr)
