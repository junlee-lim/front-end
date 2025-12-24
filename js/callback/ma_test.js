const arr = [3,88,76,9,34,65];
const myArr = {
    '0':3,
    '1':88,
    '2':76,
    '3':9,
    '4':34,
    '5':65,
    'length':6,
    'forEach': function(fn) {
        for(let i=0; i<arr.length; i++){
            fn(this[i], i)
        }
    }
};

// const aaa = (item, idx) => {
//     console.log(`arr[${idx}]: ${item}`);
// }

// myArr.forEach(aaa)

myArr.forEach((item, idx) => {
    console.log(`arr[${idx}]: ${item}`);
})