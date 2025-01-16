// fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(res => console.log(res))

console.log('A');
setTimeout(() => {
    console.log('B'); // 함수 실행 후 1초 후에 실행된다.
}, 5000);
console.log('C');

// setInterval
let number = 0;

setInterval(() => {
  // 1초마다 아래 코드가 실행된다.
    console.log(number);
    number = number + 1;
}, 1000);

console.log('Hello World');