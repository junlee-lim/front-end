const star = parseInt(Math.random()*5)+3;
console.log(star);

let a =''
for(let j=0; j<star; j++){
    for(let i=0; i<star; i++){
        i<star-(j+1) ? a=a+'a' : a=a+'*';
    }
    a = a + '\n'
}
console.log(a)