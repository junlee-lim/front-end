function abs(n1){
    if(n1<0){
        return -n1;
    }
    return n1;
}


const abs2 = function(n1) {
    if(n1<0){
        return -n1;
    }
    return n1;
}

//abs(-2020)
// const r_val = abs(-2020)
//console.log(abs)


const abs3 = abs;


console.log(abs(-10));
console.log(abs2(-10));
console.log(abs3(-10));