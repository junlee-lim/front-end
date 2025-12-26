const increaseAndPromise= (n) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const increased = n + 1;
            console.log('increased: ' + increased);
            resolve(increased);
        }, 800)
    })
}

//await는 async함수에서만 사용 가능, 우측은 무조건 promise 객체 주소 값이 있어야 함.
//await는 우측에 결과가 넘어올 때까지 기다림. resolve를 호출할 때 넘겨줬던 argument 값을 받을 때 사용
// const callFunction = async (n) => {
//     const reuslt = await increaseAndPromise(n);
//     console.log('result: ' + reuslt)
//     const reuslt2 = await increaseAndPromise(reuslt);
//     console.log('result2: ' + reuslt2);
// }
// callFunction(10);

const callFunction = async (n) => {
    let reuslt = await increaseAndPromise(n);
    console.log('result: ' + reuslt)
    reuslt = await increaseAndPromise(reuslt);
    console.log('result: ' + reuslt)
    reuslt = await increaseAndPromise(reuslt);
    console.log('result: ' + reuslt)
    reuslt = await increaseAndPromise(reuslt);
    console.log('result: ' + reuslt)
}
callFunction(10);