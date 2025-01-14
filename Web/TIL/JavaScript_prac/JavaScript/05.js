/////////// array //////////////
let fruits = ['apple', 'orange', 'berry'];
console.log(fruits); // ['apple', 'orange', 'berry']
console.log(fruits[0]);

let numbers = [1, 2, '3'];
console.log(numbers); // [ 1, 2, '3' ]
console.log(numbers[0]);

numbers.push(4);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(numbers.slice(0,2));

console.log(`LENGTH : ${numbers.length}`);
////////////////////////////////////////////

/////////////////// Object ///////////////////
// person은 3개의 속성을 가진다.
let person = {
    name: '홍길동',
    age: 30,
    job: '개발자',
};

// 마침표(.) key를 활용한 value 접근
console.log(person.name); // 홍길동

// 대괄호 key를 활용한 value 접근
console.log(person.job); // 개발자

// key를 활용한 value 접근 후 value 수정
person.age = 40;

console.log(person); // { name: '홍길동', age: 40, job: '개발자' }

//////////////////////////////////////////////////

//////////////// 집합 //////////////////
let uniqueValues = new Set([1,2,2,2,3])
console.log(uniqueValues);

//////// JSON /////////
let a = {
    "name": "홍길동", // 문자열(String)
    "age": 30, // 숫자(Number)
    "isStudent": false, // 불리언(Boolean)
    "courses": ["수학", "영어", "과학"], // 배열(Array)
    "address": {
        "city": "서울",
        "zipcode": "10001"
    }, // 객체(Object)
    "graduationYear": null // null
}

console.log(a.address.city)
/////////////////////////////////////