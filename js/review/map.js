const arr = [3, 88, 76, 9, 34, 65];

const arr1 = arr.map(item => {
    if(item%2 == 0){
        return item + 2
    }
    return item
})
console.log(arr1)