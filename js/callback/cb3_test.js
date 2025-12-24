const arr = [3,88,76,9,34,65];

// const oddArr = arr.filter(item => item % 2 === 0);
// const oddArr1 = oddArr.map(item => item / 2);
// console.log(oddArr1)

const oddArr = arr.filter(item => item % 2 === 0).map(item => item / 2);
console.log(oddArr)