const score = parseInt(Math.random()*101)
console.log(score)

let result = 'F'
if(score>=90){
    result = 'A'
}else if(score>=80){
    result = 'B'
}else if(score>=70){
    result = 'C'
}else if(score>=60){
    result = 'D'
}

if(score==100 || score%10>=8){
   console.log(result+'+')
}else if(score%10>=3){
    console.log(result+'0')
}else{
    console.log(result+'-')
}