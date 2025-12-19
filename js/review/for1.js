const star = parseInt(Math.random() * 5) + 3
console.log(star)

let a=''
for(let i=0; i<star; i++){
    a = a + '*'
}
for(let j=0; j<star; j++){
    console.log(a)
}