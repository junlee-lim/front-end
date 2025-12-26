const arr = [3,88,76,9,34,65];
const myArr = {
    '0':3,
    '1':88,
    '2':76,
    '3':9,
    '4':34,
    '5':65,
    '6': 77,
    'length':7,
    'forEach': function(fn) {
        for(let i=0; i<arr.length; i++){
            fn(this[i], i)
        }
    },
    'filter': function(fn1){
        const temp = [];
        // for(let i=0; i<arr.length; i++){
        //     const result = fn1(this[i], i);
        //     if(result){
        //         temp.push(this[i])
        //     }
        // }
        for(let i=0; i<arr.length; i++){
            if(fn1(this[i], i)){
                temp.push(this[i])
            }
        }
        return temp;
    }
};

const arr2 = myArr.filter((item, i) => item <= 70 );
console.log(arr2); //[3, 9, 34, 65]