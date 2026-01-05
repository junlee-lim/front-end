const arr = [];

for(let i = 1; i<=100; i++){
    // arr.push({id: i, name: `홍길동${i}`});
    const obj = {
        id: i,
        name: '홍길동' + i
    }
    arr.push(obj)
}
console.log(arr);

// let result = null;

// for(let i=0; i<arr.length; i++){
//     if(arr[i].id === 20){result = arr[i]}
// }

// console.log(result)