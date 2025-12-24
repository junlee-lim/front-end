const arr = [2,4,7,8];

// function proc(item){
//     console.log(item);
// }
// const proc = i => {
//     let a = 0
//     a = a + i
//     console.log(a);
// }

// arr.forEach(proc); //배열(arr)에서 자기가 갖고 있는 값을 순차적으로 준다고 약속되어 있음.\

const proc = i => {
    console.log(i);
}

arr.forEach(proc);