//배열에서 필요한 아이템들만 뽑아서 새로운 배열 만들 때 사용

const arr = [1,5,4,9,6,3,5];

const oddArr = arr.filter(item => item % 2 === 1); //arr의 item을 필터 => 살리고 싶은 조건을 적음
// = const oddArr = arr.filter( (item) => {
//       return item % 2 === 1;
//   })
console.log(oddArr);
console.log(arr);