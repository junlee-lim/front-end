// const increaseAndPrint = (n, cb) => {
//     setTimeout( () => {
//         const increased = n+1;
//         console.log(increased);
//         if(cb){
//             cb(increased);
//         }
//     }, 1000);
// }

// increaseAndPrint(0, n1 => {
//     increaseAndPrint(n1, n2 => {
//         increaseAndPrint(n2);
//     });
// });

const increaseAndPromise= (n) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const increased = n + 1;
            console.log(increased);
            resolve(increased);
        }, 800)
    })
}

increaseAndPromise(10)
.then(item => increaseAndPromise(item))
.then(item => increaseAndPromise(item))
.then(item => increaseAndPromise(item))
.then(item => increaseAndPromise(item))
.then(item => console.log('끝', item));