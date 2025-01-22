// const btn1 = document.querySelector('#my-btn')
// btn1.addEventListener('click', function(){
//     alert('어림도 없죠 ㅋㅋ')
// })

// const lec_btn = document.querySelector('#lecture')
// lec_btn.addEventListener('click', function(){
//     alert('강의 자료로 이동!')
//     // location.href = "https://useful-pantry-930.notion.site/DOM-Event-Handling-17b611ac3a008090a4e8da6e9d68ae6a"
//     window.open("https://useful-pantry-930.notion.site/DOM-Event-Handling-17b611ac3a008090a4e8da6e9d68ae6a")
// })

// document.querySelector('#parent').addEventListener('click', function () {
//     alert('부모 div 클릭');
// });

// // 자식 요소에 이벤트 핸들러 등록
// document.querySelector('#child').addEventListener('click', function () {
//     alert('자식 button 클릭');
// });

// const button = document.querySelector("#my-button")
// button.addEventListener('click', function(event){
//     alert(`클릭한 요소의 id : ${event.target.id}`);
//     alert(`발생한 이벤트 : ${event.type}`);
// })

// // DailIT


 // 1
const checkBox = document.querySelector("#my-checkbox");

checkBox.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
});

// 2
const formTag = document.querySelector("#my-form");

formTag.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    event.target.reset();
});

// 3
const aTag = document.querySelector("#my-link");

aTag.addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault();
});

// 4
document.addEventListener("scroll", function (event) {
    // console.log(window.scrollX, window.scrollY);
    console.log(event);
    console.log(event.cancelable);
    event.preventDefault();
});