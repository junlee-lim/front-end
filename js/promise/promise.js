let val = 10
const p1 = new Promise((resolve, reject)=> {
    if(val%2){
        resolve('홀수') //resolve(첫 번째 파라미터 이름)는 then 메소드에 전달된 콜백함수가 호출됨
    }else{
        reject('짝수') //reject(두 번째 파라미터 이름)는 catch 메소드에 전달된 콜백함수가 호출됨
    }
});

p1
.then(item => console.log('then: ' + item))
.catch(item => console.log('catch: ' + item))