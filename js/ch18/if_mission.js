const score = parseInt(Math.random()*81) + 20;

// if(score >= 90) {
//     console.log('A');
// } else if(score >= 80) {
//     console.log('B');
// } else if(score >= 70) {
//     console.log('C');
// } else if(score >= 60) {
//     console.log('D');
// } else{
//     console.log('F');
// };

if (score == 100) { console.log("A+"); }
else if (score >= 90) {
    console.log("A");
    if (score % 10 >= 8) { console.log("+"); }
    else if (score % 10 >= 3) { console.log("0"); }
    else if(score % 10 >= 0)  { console.log("-");  }
}
else if (score >= 80) {
    console.log("B");
    if (score % 10 >= 8) { console.log("+"); }
    else if (score % 10 >= 3) { console.log("0"); }
    else if (score % 10 >= 0) { console.log("-"); }
}
else if (score >= 70) {
    console.log("C");
    if (score % 10 >= 8) { console.log("+"); }
    else if (score % 10 >= 3) { console.log("0"); }
    else if (score % 10 >= 0) { console.log("-"); }
}
else if (score >= 60) {
    console.log("D");
    if (score % 10 >= 8) { console.log("+"); }
    else if (score % 10 >= 3) { console.log("0"); }
    else if (score % 10 >= 0) { console.log("-"); }
}
else { console.log("F"); }

console.log(score);