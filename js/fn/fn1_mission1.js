function abs(n1){
    if(n1<0){
        console.log(-n1)
    }
    else{
        console.log(n1)
    }
}
abs(0);
abs(-20);

//원본 훼손 금지
function abs(n1){
    let val = n1;
    if(val<0){val = -val;}
    console.log(val);
}