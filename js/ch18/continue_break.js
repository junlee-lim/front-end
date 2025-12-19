for(let i=1; i<11; i++){
    if(i == 5){break;}
    console.log(i)
}

console.log('-------------')

for(let i=1; i<11; i++){
    if(i == 5){continue;}
    console.log(i)
}

console.log('-------------')

for(let i=0; i<10; i++){
    for(let k=0; k<10 ; k++){
        if(k==5){break;}
        console.log(i, k)
    }
}

console.log('-------------반복문에 별명, 별명 지으려면 :')

out: //=> : 바로 아래에 있는 반복문의 별명
for(let i=0; i<10; i++){
    for(let k=0; k<10 ; k++){
        if(k==5){break out;}
        console.log(i, k)
    }
}