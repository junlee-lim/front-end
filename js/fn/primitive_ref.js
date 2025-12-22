const changeNum = (num) => {
    num=20
}
let num = 10;
changeNum(num);
console.log(num);

console.log('-------------------');

const changeBoxNum = (box) => {
    box.num = 20;
}
let box = {
    num: 10
};
console.log('box.num: ' + box.num);
changeBoxNum(box);
console.log('box.num: ' + box.num);

const changeBoxNum1 = (box1) => {
    box1 = {
        num: 30
    }
    box1.num = 20;
}
let box1 = {
    num: 10
};
console.log('box1.num: ' + box1.num);
changeBoxNum(box);
console.log('box1.num: ' + box1.num);