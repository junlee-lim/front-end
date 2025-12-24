const arr = [3,88,76,9,34,65];
const myArr = {
    '0':3,
    '1':88,
    '2':76,
    '3':9,
    '4':34,
    '5':65,
    'length':6,
    'forEach': function() {
        for(let i=0; i<arr.length; i++){
            console.log(this[i]);
        }
    }
};

console.log(arr[5], myArr[5]);
console.log('arr.forEach:', arr.forEach);
console.log('myArr.forEach:', myArr.forEach);

myArr.forEach();