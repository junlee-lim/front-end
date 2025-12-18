const star = parseInt(Math.random() * 5) + 3 //3~7

console.log(star)

/*
for(let a=0; a<3; a++){ 3줄 만들기
}
for(let a=1; a<=3; a++){ 3줄 만들기
}
for(let a=1; a<=5; a++){ 5줄 만들기
}
*/

//세로로 출력
for(let i=0; i<star; i++){
    console.log('*')
}

//가로로 출력
let a = '1'
for(let i=0; i<5; i++){
    a = a + '*'
}
console.log(a)
// => 1*****

let b = ''
for(let i=0; i<star; i++){
    b = b + '*'
}
console.log(b)
// => star 숫자 만큼 *이 출력