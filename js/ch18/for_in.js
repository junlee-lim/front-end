/*
객체가 가지고 있는 key(속성명)를 순차적으로 줌
*/

const person = {
    name: '김',
    age: 25,
    married: false
};

for(const key in person){
    console.log('key: ', key);
}

for(const k in person){
    console.log(person[k]);
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.married);