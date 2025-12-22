//void 함수
function v_add(n1, n2){
    let sum = n1+n2;
    return;
}
//return 함수
function r_add(n1, n2){
    let sum = n1+n2;
    return sum;
}

v_add(10, 20);
const r_val = r_add(10, 20);

console.log(v_add);
console.log(r_val);