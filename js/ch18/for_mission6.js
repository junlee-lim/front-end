//1
const a = parseInt(Math.random() * 5) + 3 //3~7
console.log(a)

let b = ''
for(let j=0; j<a; j++){
    for(let i=0; i<a; i++){
        a = a + '*'
    }
    a = a + '\n';
}
console.log(a);


//2
const c = parseInt(Math.random() * 5) + 3
console.log(c)

for(let j=0; j<c; j++){
    let d = ''
    for(let i=0; i<c; i++){
        d = d + '*'
    }
    console.log(c)
};


//3
const e = parseInt(Math.random() * 5 + 3);
console.log(e)

let w= '*' ;
for (k=1; k<e ; k++ ){
    w = w+'*';
}
for(q=0; q<e; q++){
    console.log(w)
}