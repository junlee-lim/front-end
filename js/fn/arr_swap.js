const arr = [10, 20];

let a = arr[0]
arr[0] = arr[1]
arr[1] = a

console.log(arr);