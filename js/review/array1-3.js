const arr = [2, 3, 4, 5, 8, 11];

let a=0;
let b=0;
for(let i=0; i<arr.length; i++){
    arr[i]%2==0 ? a = a+arr[i] : b = b+arr[i]
}
console.log('짝수: ' + a)
console.log('홀수: ' + b)