const star = parseInt(Math.random()*5)+3;
console.log(star);

// let a='';
// for(let b=0; b<star; b++){
//     for(let i=0; i<1; i++){
//         a = a + '*'
//     }
//     console.log(a)
// }// for 구문 안에 있는 for 구문은 새로운 세상

// let c='';
// for(let b=0; b<star; b++){
//     c = c + '*'
//     console.log(c)
// }
// //첫 번째 거 단순화

// let i = '';
// for (let a=0; a<star; a++) {
//   for (let b=0; b<a + 1; b++) {
//     i = i + "*";
//   }
//   console.log(i)
// }
// //*이 중첩되어서 나옴


// let i = '';
// for(let c=0; c<star; c++){
//     for(let d=0; d<star-c; d++){
//         i=i+'a';
//     }
//     i=i+'\n';
// }
// for(let a=0; a<star; a++){
//         for(let b=0; b<a+1; b++){
//             i=i+'*';
//         }
//         i=i+'\n';
// }
// console.log(i);
// //반대로 나오다가 순서대로 나오게


// let i = '';
// for(let c=0; c<star; c++){
//     for(let d=1; d<star-c; d++){
//         i = i + 'a';
//     }
//     for(let b=0; b<c+1; b++){
//         i = i + '*'
//     }
//     i=i+'\n';
// }
// console.log(i);
// //b<c+1이 들어감

// let i = '';
// for(let c=0; c<star; c++){
//     for(let d=1; d<star-c; d++){
//         i = i + 'a';
//     }
//     for(let b=-1; b<c; b++){
//         i = i + '*'
//     }
//     i=i+'\n';
// }
// console.log(i);
//b<c+1에 연산이 안 들어가게


// for 2개, if문
let i = '';
for (let a = 0; a < star; a++) {
    for (let b = 0; b < star; b++) {
        if (b < star - (a + 1)) { i += "a"; }
        else {i += "*";}
  }
  i += "\n";
}
console.log(i);