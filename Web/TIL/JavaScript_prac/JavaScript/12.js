// fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(res => console.log(res))

// console.log('A');
// setTimeout(() => {
//     console.log('B'); // 함수 실행 후 1초 후에 실행된다.
// }, 5000);
// console.log('C');

// setInterval
// let number = 0;
// setInterval(() => {
//     number += 1;
//     if (number<=10){
//       const newDiv = document.querySelector("#id1")
//       newDiv.textContent = number
//       console.log(number);
//     }
// }, 1000);

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const data = fetch(url)
    .then((response) => {
        // 네트워크 요청 결과 데이터를 JSON 구조로 변환 후 반환
        return response.json();
    })
    .then((json) => {
        // JSON 구조로 변환된 데이터 처리
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    });

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
