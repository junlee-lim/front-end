let bool1 = true;
let bool2 = false;

console.log('bool1: ', bool1);
console.log('typeof bool1: ', typeof(bool1));

let n1 = 10, n2 = 20;
bool1 = n1 > n2;
console.log('bool1: ', bool1);
console.log('n1 > 10: ', n1 > 10);
console.log('n1 >= 10: ', n1 >= 10);
console.log('-------------------------');
console.log('n1 == n2: ', n1 == n2);
console.log('n1 != n2: ', n1 != n2);
console.log('-------------------------');
console.log('!(n1 == 10): ', !(n1 == n2));
console.log('n1 != 10: ', n1 != n2);
console.log('-------------------------');
n1 = n1 + 5;
console.log('n1: ', n1);

n1++;
++n1;
console.log('n1: ', n1);

--n1;
n1--;
console.log('n1: ', n1);
console.log('-------------------------');
let n4 = 10;
let result4 = n4++
let n5 = 10;
let result5 = ++n5
console.log('result4: ', result4);
console.log('result5: ', result5);
console.log('n4: ', n4);
console.log('n5: ', n5);
console.log('-------------------------');

let n6 = 10;
n6++; //쓰기
console.log('n6: ', n6); //읽기

let n7 = 10;
console.log('n7++: ', n7++); //읽기 -> 쓰기
console.log('n7: ', n7); //읽기

let n8 = 10;
console.log('++n8: ', ++n8); //쓰기 -> 읽기
console.log('n8: ', n8); //읽기