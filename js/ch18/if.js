const rVal = parseInt(Math.random()*25);

console.log(rVal);
if(rVal < 15){
    console.log('15보다 작습니다');   
}
else {
    console.log('15이상 입니다');   
};

console.log('----------------');

const value = parseInt(Math.random()*10 + 1);

if(value>=8) {
    console.log(`${value}값은 8이상이다.`);
} else if(value%2 == 1) {
    console.log(`${value}값은 홀수이다.`);
}