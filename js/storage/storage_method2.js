const obj = {};

for(let i = 1; i<=10; i++){
    const temp = {
        id: i,
        name: `gg${i}`
    };
    obj[i] = temp; //변수는 대괄호로 불러와야 함
}
console.log(obj)