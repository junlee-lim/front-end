const arr = new Array(10);
for(let i=0; i<arr.length; i++){
    arr[i] = i + 1
};
console.log(arr);



const arr = [3, 8, 11, 86, 43, 22];
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i]  //0+arr[i] -> 0+arr[i]+arr[i] -> ... arr.length 길이까지 계속 반복
}
console.log(sum);



const arr = [3, 8, 11, 86, 43, 22, 27];
let sum = 0; //짝수를 넣을 공간 만들기
let sum1 = 0; //홀수를 넣을 공간 만들기
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        sum = sum + arr[i]
    }else{
        sum1 = sum1+ arr[i]
    }
}
console.log(sum);
console.log(sum1);

const arr = [ 3, 8, 11, 86, 43, 22, 27 ]; 
const result = [0, 0];
const resultStr = ['짝수', '홀수'];

for(let i=0; i<arr.length; i++) {
    const item = arr[i];
    result[item % 2] = result[item % 2] + item; //result[item % 2] = 0 또는 1 => item이 짝수면 0번방, 홀수면 1번방 => result의 배열은 둘다 0으로 주니까 +item 앞에 있는 result[item % 2]도 항상 0으로 계산
}

for(let i=0; i<result.length; i++) {
    console.log(`${resultStr[i]}: ${result[i]}`);
}


const arr = [3, 8, 11, 86, 100, 43, 22, 27];
let max=arr[0];
let min=arr[0];
for(let i=1; i<arr.length; i++){
    if(max > arr[i]){
        console.log(max) //콘솔 값이 계속 반복됨
    }
    if(min < arr[i]){
        console.log(min)
    }
}

const arr = [3, 8, 11, 86, 100, 43, 22, 27];
let max=arr[0];
let min=arr[0];
for(let i=1; i<arr.length; i++){    //i=0일 필요없는 이유는 어차피 0번 값은 자기 자신이니까 비교할 필요가 없으니까
    if(min > arr[i]){
        min = arr[i]
    }
    if(max < arr[i]){
        max = arr[i];   //for 구문 안에 있으니까 
    }
}
console.log(min, max)